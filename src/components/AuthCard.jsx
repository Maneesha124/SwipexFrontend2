import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ROLE_ROUTES = {
  seeker: '/jobseeker',
  recruiter: '/recruiter',
  admin: '/admin',
};

const roleData = {
  seeker: {
    name: 'Job Seeker',
    nameLabel: 'Full Name',
    namePlaceholder: 'e.g. Alex Morgan',
    guidance: 'Job seekers enjoy instant swipe applications, AI profile analysis, and match tracking.',
    iconSvg: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    )
  },
  recruiter: {
    name: 'Recruiter',
    nameLabel: 'Company / Organization Name',
    namePlaceholder: 'e.g. Acme Tech Corp',
    guidance: 'Recruiters can post active openings, review matched talent pipelines, and dispatch instant interviews.',
    iconSvg: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7v14M21 7v14M6 11h2m-2 4h2m-2 4h2m6-8h2m-2 4h2m-2 4h2m6-8h2m-2 4h2m-2 4h2M9 3h6v4H9z" />
    )
  },
  admin: {
    name: 'Admin',
    nameLabel: 'Admin ID / Full Name',
    namePlaceholder: 'e.g. Sarah Connor (Ops Lead)',
    guidance: 'Admin accounts are invite-only. Please sign in with your enterprise credentials. Self-registration is disabled.',
    iconSvg: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    )
  }
};

export default function AuthCard() {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [currentRole, setCurrentRole] = useState('seeker');
  const [currentAuthMode, setCurrentAuthMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('alex.morgan@example.com');
  const [password, setPassword] = useState('SwipeXSecure2025');
  const [fullName, setFullName] = useState('');

  const [alertState, setAlertState] = useState({
    visible: true,
    message: 'Welcome! Select your role to get calibrated access.',
    type: 'info' // 'info' | 'success' | 'error'
  });

  const triggerAlert = (message, type = 'info') => {
    setAlertState({ visible: true, message, type });
  };

  const handleRoleSelect = (roleKey) => {
    setCurrentRole(roleKey);
    if (roleKey === 'admin') {
      setCurrentAuthMode('signin');
      triggerAlert('Switched to Admin mode. Administrator accounts are invite-only.', 'info');
    } else {
      triggerAlert(`Switched perspective to ${roleData[roleKey].name}.`, 'info');
    }
  };

  const handleAuthModeSwitch = (mode) => {
    if (currentRole === 'admin' && mode === 'register') {
      triggerAlert('Administrator accounts cannot be self-registered. Please sign in.', 'error');
      return;
    }
    setCurrentAuthMode(mode);
    if (mode === 'signin') {
      triggerAlert('Switched to Sign In mode.', 'info');
    } else {
      triggerAlert('Switched to Registration mode.', 'info');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roleName = roleData[currentRole].name;

    if (currentAuthMode === 'signin') {
      triggerAlert(`Welcome back! Authenticating as ${roleName} (${email})...`, 'success');
      const result = await login({ email, password, role: currentRole });
      if (result.success) {
        navigate(ROLE_ROUTES[currentRole]);
      } else {
        triggerAlert(result.error || 'Sign in failed. Please try again.', 'error');
      }
    } else {
      triggerAlert(`Account registered! Provisioning ${roleName} workspace...`, 'success');
      const result = await register({ email, password, fullName, role: currentRole });
      if (result.success) {
        navigate(ROLE_ROUTES[currentRole]);
      } else {
        triggerAlert(result.error || 'Registration failed. Please try again.', 'error');
      }
    }
  };

  const activeData = roleData[currentRole];

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-12 xl:p-16 relative">
      {/* Mobile Only Branding Bar */}
      <div className="lg:hidden w-full max-w-md mb-6 flex items-center justify-between">
        <a className="flex items-center gap-2.5" href="/">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect height="14" rx="3" width="14" x="2" y="5"></rect>
              <path d="m14 9-6 6"></path>
              <path d="M10 9h4v4"></path>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Swipe<span className="text-blue-600">X</span>
          </span>
        </a>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
          Auth Gateway
        </span>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-[480px] bg-white rounded-3xl p-7 sm:p-9 shadow-2xl shadow-slate-200/80 border border-slate-200/90 relative transition-all duration-300">
        
        {/* Dynamic Notification Alert Banner */}
        {alertState.visible && (
          <div className={`mb-5 flex items-center justify-between p-3.5 rounded-2xl border text-xs font-medium ${
            alertState.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : alertState.type === 'error'
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : 'bg-blue-50 border-blue-200 text-blue-900'
          }`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold text-[11px] text-white ${
                alertState.type === 'success' ? 'bg-emerald-600' : alertState.type === 'error' ? 'bg-rose-600' : 'bg-blue-600'
              }`}>
                {alertState.type === 'success' ? '✓' : alertState.type === 'error' ? '!' : 'i'}
              </span>
              <span>{alertState.message}</span>
            </div>
            <button
              type="button"
              aria-label="Dismiss alert"
              onClick={() => setAlertState({ ...alertState, visible: false })}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        )}

        {/* 1. ROLE SELECTOR BAR */}
        <div className="mb-6">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Select Your Role
          </label>
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/70">
            <button
              type="button"
              onClick={() => handleRoleSelect('seeker')}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                currentRole === 'seeker'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-semibold'
              }`}
            >
              <span>👤</span>
              <span className="truncate">Job Seeker</span>
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('recruiter')}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                currentRole === 'recruiter'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-semibold'
              }`}
            >
              <span>🏢</span>
              <span className="truncate">Recruiter</span>
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('admin')}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                currentRole === 'admin'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-semibold'
              }`}
            >
              <span>🛡️</span>
              <span className="truncate">Admin</span>
            </button>
          </div>
        </div>

        {/* 2. CONTEXT TITLE & DYNAMIC SUB-HEADLINE */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentAuthMode === 'signin' ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xs text-slate-500">Selected Role:</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
                {activeData.name}
              </span>
            </div>
          </div>

          {/* Auth Mode Switcher Tab Bar: Sign In / Register (Hidden for Admin) */}
          {currentRole !== 'admin' ? (
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/80">
              <button
                type="button"
                onClick={() => handleAuthModeSwitch('signin')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentAuthMode === 'signin' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => handleAuthModeSwitch('register')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentAuthMode === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Register
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-700">
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span>Secure Sign In</span>
            </div>
          )}
        </div>

        {/* 3. FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* FIELD: Full Name / Organization (REGISTER MODE ONLY) */}
          {currentAuthMode === 'register' && (
            <div className="space-y-1.5 transition-all">
              <label className="block text-xs font-bold text-slate-700">
                {activeData.nameLabel}
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {activeData.iconSvg}
                  </svg>
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={activeData.namePlaceholder}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm text-slate-900 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>
          )}

          {/* FIELD: Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              Email Address
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm text-slate-900 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* FIELD: Password */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              Password
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-3 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm text-slate-900 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded transition-colors"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* SIGN IN ACTIONS */}
          {currentAuthMode === 'signin' && (
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 font-medium">
                <input defaultChecked type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <span>Remember me</span>
              </label>
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  triggerAlert('Password reset instructions will be sent to your email.', 'info');
                }}
                className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>{currentAuthMode === 'signin' ? 'Sign In to SwipeX' : 'Create Account'}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>

          {/* ROLE GUIDANCE NOTE */}
          <p className="text-center text-[11px] text-slate-500 pt-1 leading-relaxed">
            {activeData.guidance}
          </p>

          {/* SOCIAL DIVIDER */}
          <div className="relative my-4 pt-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-semibold tracking-wider text-[10px]">
                Or connect with
              </span>
            </div>
          </div>

          {/* SSO QUICK BUTTONS */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => triggerAlert('Connecting to Google Enterprise SSO...', 'info')}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-xs transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z" fill="#EA4335"></path>
                <path d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" fill="#4285F4"></path>
                <path d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.5s.7 4.8 1.9 7.2l3.7-2.9z" fill="#FBBC05"></path>
                <path d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z" fill="#34A853"></path>
              </svg>
              <span>Google</span>
            </button>
            <button
              type="button"
              onClick={() => triggerAlert('Connecting to GitHub SSO...', 'info')}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-xs transition-colors"
            >
              <svg className="w-4 h-4 text-slate-900 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
              </svg>
              <span>GitHub</span>
            </button>
          </div>
        </form>

        {/* CARD FOOTER */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400">
            By continuing, you agree to SwipeX's <a className="text-blue-600 hover:underline" href="#terms">Terms</a> and <a className="text-blue-600 hover:underline" href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>

      {/* BOTTOM SYSTEM STATUS */}
      <div className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>Secure 256-bit TLS Encrypted Session</span>
      </div>
    </div>
  );
}