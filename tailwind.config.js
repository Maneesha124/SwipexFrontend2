/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ---------------------------------------------------------------
        // Landing module — Material-3-style semantic tokens.
        // Heavily used throughout LandingPage / Header / Hero, preserved
        // verbatim from the landing module's tailwind.config.js.
        // ---------------------------------------------------------------
        surface: "#f8f9ff",
        "surface-dim": "#cbdbf5",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dce9ff",
        "surface-container-highest": "#d3e4fe",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#434655",
        "inverse-surface": "#213145",
        "inverse-on-surface": "#eaf1ff",
        outline: "#737686",
        "outline-variant": "#c3c6d7",
        "surface-tint": "#0053db",
        primary: "#004ac6",
        "on-primary": "#ffffff",
        "primary-container": "#2563eb",
        "on-primary-container": "#eeefff",
        "inverse-primary": "#b4c5ff",
        secondary: "#515f78",
        "on-secondary": "#ffffff",
        "secondary-container": "#d2e0fe",
        "on-secondary-container": "#55637d",
        tertiary: "#006329",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#007f36",
        "on-tertiary-container": "#c7ffca",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#dbe1ff",
        "primary-fixed-dim": "#b4c5ff",
        "on-primary-fixed": "#00174b",
        "on-primary-fixed-variant": "#003ea8",
        "secondary-fixed": "#d6e3ff",
        "secondary-fixed-dim": "#b9c7e4",
        "on-secondary-fixed": "#0d1c32",
        "on-secondary-fixed-variant": "#39475f",
        "tertiary-fixed": "#7ffc97",
        "tertiary-fixed-dim": "#62df7d",
        "on-tertiary-fixed": "#002109",
        "on-tertiary-fixed-variant": "#005320",
        background: "#f8f9ff",
        "on-background": "#0b1c30",
        "surface-variant": "#d3e4fe",

        // ---------------------------------------------------------------
        // Shared "brand" accent palette — actively consumed by the
        // Recruiter portal (bg-brand-orange, bg-brand-canvas,
        // bg-brand-blue, bg-brand-dark, etc). Preserved verbatim from
        // the recruiter module's tailwind.config.js.
        //
        // The numeric shade scale (50/100/500/600/700/800/DEFAULT) below
        // is preserved verbatim from the Job Seeker & Admin modules'
        // *identical* orange scale definitions. It is not currently
        // referenced by any className in the provided components, so
        // merging it alongside the flat brand.* keys above is purely
        // additive and changes no rendered output.
        // ---------------------------------------------------------------
        brand: {
          blue: '#004AC6',
          'blue-bright': '#2563EB',
          navy: '#0A192F',
          dark: '#0F172A',
          emerald: '#16A34A',
          orange: '#EA580C',
          'orange-hover': '#C2410C',
          canvas: '#F4F7FF',
          DEFAULT: '#EA580C',
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
        },

        // ---------------------------------------------------------------
        // Auth module's own accent palette. Kept under its own namespace
        // (rather than merged into `brand` above) because Auth's
        // tailwind.config.js defined `brand.50/100/500/600/700` as a
        // BLUE scale, which collides key-for-key with Job Seeker/Admin's
        // ORANGE scale under the same names. Since no component in any
        // module actually renders a `bg-brand-500`-style class, nothing
        // visually changes — this namespace only prevents silent data
        // loss of the original values.
        // ---------------------------------------------------------------
        authBrand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },

        // Admin module's navy shade scale (top-level `colors.navy`, from
        // admin's tailwind.config.js). Not currently used by any
        // `navy-*` className, preserved for fidelity.
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Auth module's own, differently-valued navy scale — namespaced
        // for the same non-destructive reason as authBrand above.
        authNavy: {
          900: '#0A192F',
          800: '#0f2442',
          700: '#163259',
        },

        // Job Seeker-only extra tokens (top-level keys, not nested under
        // `brand`, so no collision with Recruiter's `brand.canvas`).
        slateNavy: '#0F172A',
        canvas: '#F8FAFC',
      },
      fontFamily: {
        // Union of all 5 modules' font stacks — all centered on
        // "Plus Jakarta Sans" with Inter/system-ui fallbacks.
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        // Landing module's custom spacing scale, preserved verbatim.
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4rem",
        "gutter-desktop": "1.5rem",
        "margin-desktop": "2rem",
      },
    },
  },
  plugins: [],
};
