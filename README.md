# SwipeX — Unified Frontend

A single, cohesive React + Vite + Tailwind project consolidating all five
provided modules: **Landing**, **Authentication**, **Job Seeker**,
**Recruiter**, and **Admin**.

## Setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
```

Copy `.env.example` to `.env` and point `VITE_API_BASE_URL` at your running
SwipeX FastAPI backend (defaults to `http://localhost:8000/api/v1` if unset —
see each API client file for its exact fallback).

## Routes

| Route                  | Renders                              | Source                                   |
|-------------------------|---------------------------------------|-------------------------------------------|
| `/`                      | `LandingPage`                          | former `landing/src/App.jsx`                |
| `/auth`                   | `AuthPage`                              | former `auth/src/App.jsx`                     |
| `/app/*`                    | `JobSeekerApp`                           | former `jobseeker/src/App.jsx`                  |
| `/recruiter`                  | `RecruiterWorkspace`                      | Recruiter module's dashboard page                 |
| `/recruiter/discover`           | `CandidatePortal`                          | Recruiter module's alt swipe-preview page           |
| `/admin/*`                        | `AdminApp`                                  | former `admin/src/App.jsx` (has its own nested routes for `/admin/users`, `/admin/moderation`, `/admin/settings`, `/admin/profile`) |

## What was preserved exactly vs. what had to change

**Preserved byte-for-byte:** every component's JSX, styling classes, local
state, and event handlers. I diffed every moved file against its original
source to confirm this — the only lines touched anywhere are `import ...
from '...'` paths and, in 4 files, the exported function's name (`App` →
`LandingPage` / `AuthPage` / `JobSeekerApp` / `AdminApp`, since a single
project can't export five different default `App` components).

**Two structural notes worth knowing about:**

1. **Recruiter's original `App.jsx` isn't mounted directly.** It wrapped its
   two pages (`CandidatePortal`, `RecruiterWorkspace`) in its own
   `<BrowserRouter>`. Since this project has exactly one `<BrowserRouter>`
   (in `main.jsx`), nesting a second one would throw at runtime
   ("You cannot render a `<Router>` inside another `<Router>`"). Rather than
   edit that file's logic, I mounted its two page components directly in the
   unified `src/App.jsx` at `/recruiter` and `/recruiter/discover` — their
   internal code is untouched, and `CandidateHeader.jsx`'s existing
   `<Link to="/recruiter">` already pointed at the right place.

2. **Tailwind's `brand`/`navy` color tokens conflicted across modules**
   (Auth's `tailwind.config.js` defined a *blue* `brand.500` scale; Job
   Seeker/Admin defined an *orange* one under the same key names). I
   confirmed via a full grep of every component that **none of those numeric
   shade tokens are actually referenced by any className** — only
   Recruiter's flat-named tokens (`bg-brand-orange`, `bg-brand-canvas`, etc.)
   are live. So I merged all of it non-destructively: Recruiter's active
   palette sits at `colors.brand`, and Auth's otherwise-colliding, unused
   scale was preserved under `colors.authBrand` / `colors.authNavy` rather
   than silently dropped. **No visual output changes as a result.**

## New files (not in any of the 5 provided dumps)

- `src/context/AuthContext.jsx` — central auth state (`login`, `register`,
  `logout`, `currentUser`, `token`) talking to the FastAPI backend via the
  Job Seeker module's existing `src/api/axiosClient.js`.
- `src/components/ProtectedRoute.jsx` — optional RBAC route guard. **Not**
  applied to any route by default, since none of the provided pages call
  `login()` yet — wrapping them now would immediately redirect every
  visitor. Wire it in once `AuthCard.jsx`'s `handleSubmit` calls
  `useAuth().login()`.
- `src/main.jsx`, `src/App.jsx`, `package.json`, `vite.config.js`,
  `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/index.css`
  — the unified project shell, as requested.

## Verified

`npm install && npm run build` completes with **zero errors** (1947 modules
transformed) — every import across all 51 files resolves correctly.
