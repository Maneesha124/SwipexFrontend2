import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import JobSeekerApp from './pages/JobSeekerApp';
import AdminApp from './pages/AdminApp';
import CandidatePortal from './pages/recruiter/CandidatePortal';
import RecruiterWorkspace from './pages/recruiter/RecruiterWorkspace';

/**
 * App.jsx (unified routing shell)
 * ---------------------------------------------------------------------
 * This is the single, centrally-authored router for the unified project.
 * Each module's own former App.jsx is preserved — unmodified in
 * logic/JSX — as a renamed "page" component under src/pages/, and
 * mounted here at a sensible route:
 *
 *   /                      -> LandingPage      (former landing/src/App.jsx)
 *   /auth                   -> AuthPage         (former auth/src/App.jsx)
 *   /jobseeker/*             -> JobSeekerApp     (former jobseeker/src/App.jsx)
 *   /recruiter                -> RecruiterWorkspace (Recruiter module's main dashboard)
 *   /recruiter/discover         -> CandidatePortal    (Recruiter module's alt swipe-preview page)
 *   /admin/*                      -> AdminApp        (former admin/src/App.jsx; has its own
 *                                                      nested <Routes> for /admin/users,
 *                                                      /admin/moderation, /admin/settings,
 *                                                      /admin/profile)
 *
 * None of these routes are wrapped in <ProtectedRoute> by default, so
 * direct/unauthenticated navigation during local development is never
 * blocked. Wrap any of them in <ProtectedRoute allowedRoles={[...]}>
 * once you want RBAC enforcement.
 *
 * Note on the Recruiter module specifically: its own original App.jsx
 * wrapped its two pages in a SECOND <BrowserRouter>. Since this project
 * uses exactly one <BrowserRouter> (in main.jsx), that inner Router
 * could not be reused as-is without React Router raising a
 * "You cannot render a <Router> inside another <Router>" error. Rather
 * than edit that file's logic, we simply mount its two page components
 * (CandidatePortal, RecruiterWorkspace) directly here — their own
 * internal code is 100% untouched.
 * ---------------------------------------------------------------------
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />

      <Route path="/jobseeker/*" element={<JobSeekerApp />} />

      <Route path="/recruiter" element={<RecruiterWorkspace />} />
      <Route path="/recruiter/discover" element={<CandidatePortal />} />

      <Route path="/admin/*" element={<AdminApp />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}