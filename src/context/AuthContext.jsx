import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axiosClient from '../api/axiosClient';

/**
 * AuthContext.jsx
 * ---------------------------------------------------------------------
 * Central auth state provider. Exposes `useAuth()` with: user
 * (aliased as currentUser for backward compatibility), token, role,
 * isAuthenticated, login(), register(), logout().
 *
 * Dev-friendly local fallback: login()/register() first try the real
 * FastAPI backend via axiosClient. If that call fails because the
 * backend isn't reachable (network error / no response at all — e.g.
 * you're testing the frontend standalone), it transparently falls back
 * to a local mock session instead of blocking navigation. A real
 * rejection FROM the backend (bad credentials, 4xx/5xx with a response
 * body) is still surfaced as a failure and does not navigate.
 *
 * The session token is stored under BOTH:
 *   - "swipex_auth_token"  (primary key for this app)
 *   - "token"               (kept in sync so the existing axiosClient
 *                             request interceptor, which already reads
 *                             "token", keeps attaching the Bearer header
 *                             without needing any change to that file)
 * ---------------------------------------------------------------------
 */

const AuthContext = createContext(undefined);

const ROLE_KEY_MAP = {
  seeker: 'job_seeker',
  recruiter: 'recruiter',
  admin: 'admin',
};

let mockIdCounter = 1;

function buildMockUser({ email, role, fullName }) {
  return {
    id: `mock-${Date.now()}-${mockIdCounter++}`,
    email,
    full_name: fullName || (email ? email.split('@')[0] : 'SwipeX User'),
    role: ROLE_KEY_MAP[role] || role,
  };
}

function buildMockToken(user) {
  // Clearly-labeled local/dev-only token (not a real JWT) — just enough
  // to unblock local UI testing when the backend isn't running yet.
  return `dev-mock-token.${btoa(JSON.stringify({ sub: user.id, role: user.role, ts: Date.now() }))}`;
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem('swipex_auth_token') || localStorage.getItem('token')
  );
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('swipex_user');
    return raw ? JSON.parse(raw) : null;
  });
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const persistSession = useCallback((accessToken, userObj) => {
    if (accessToken) {
      localStorage.setItem('swipex_auth_token', accessToken);
      // Kept in sync so axiosClient's existing interceptor (which reads
      // "token") continues to attach the Bearer header unmodified.
      localStorage.setItem('token', accessToken);
    }
    if (userObj) {
      localStorage.setItem('swipex_user', JSON.stringify(userObj));
    }
    setToken(accessToken || null);
    setUser(userObj || null);
  }, []);

  const login = useCallback(async ({ email, password, role }) => {
    setAuthLoading(true);
    setAuthError(null);
    try {
      const { data } = await axiosClient.post('/auth/login', { email, password });
      const authenticatedUser = data.user || { email, role: ROLE_KEY_MAP[role] || role };
      persistSession(data.access_token, authenticatedUser);
      return { success: true, user: authenticatedUser };
    } catch (err) {
      if (!err?.response) {
        // Backend unreachable (not running / network error / CORS) —
        // fall back to a local mock session so dev navigation isn't blocked.
        const mockUser = buildMockUser({ email, role });
        const mockToken = buildMockToken(mockUser);
        persistSession(mockToken, mockUser);
        return { success: true, user: mockUser, mocked: true };
      }
      const message =
        err.response?.data?.detail || 'Unable to sign in. Please check your credentials.';
      setAuthError(message);
      return { success: false, error: message };
    } finally {
      setAuthLoading(false);
    }
  }, [persistSession]);

  const register = useCallback(async ({ email, password, fullName, role }) => {
    setAuthLoading(true);
    setAuthError(null);
    try {
      const { data } = await axiosClient.post('/auth/register', {
        email,
        password,
        full_name: fullName,
        role: ROLE_KEY_MAP[role] || role,
      });
      const registeredUser =
        data.user || { email, full_name: fullName, role: ROLE_KEY_MAP[role] || role };
      persistSession(data.access_token, registeredUser);
      return { success: true, user: registeredUser };
    } catch (err) {
      if (!err?.response) {
        const mockUser = buildMockUser({ email, role, fullName });
        const mockToken = buildMockToken(mockUser);
        persistSession(mockToken, mockUser);
        return { success: true, user: mockUser, mocked: true };
      }
      const message = err.response?.data?.detail || 'Unable to register. Please try again.';
      setAuthError(message);
      return { success: false, error: message };
    } finally {
      setAuthLoading(false);
    }
  }, [persistSession]);

  const logout = useCallback(() => {
    localStorage.removeItem('swipex_auth_token');
    localStorage.removeItem('token');
    localStorage.removeItem('swipex_user');
    setToken(null);
    setUser(null);
  }, []);

  // Keep multiple tabs in sync if the token is cleared/set elsewhere.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'swipex_auth_token' || e.key === 'token') {
        setToken(localStorage.getItem('swipex_auth_token') || localStorage.getItem('token'));
      }
      if (e.key === 'swipex_user') {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const value = {
    token,
    user,
    currentUser: user, // backward-compatible alias
    role: user?.role || null,
    isAuthenticated: Boolean(token),
    authLoading,
    authError,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error('useAuth must be used within an <AuthProvider>');
  }
  return ctx;
};

export default AuthContext;