import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute.jsx
 * ---------------------------------------------------------------------
 * Optional RBAC route guard, provided alongside AuthContext.
 *
 * It is NOT applied to any route by default in this project, because
 * none of the provided pages (JobSeekerApp, RecruiterWorkspace,
 * AdminApp) currently call `login()` from AuthContext — wrapping them
 * now would immediately redirect every visitor away, which would change
 * the out-of-the-box behavior of the exact components you provided.
 *
 * Once you wire AuthCard.jsx's handleSubmit (or your real backend flow)
 * to call `login()`/`register()` from `useAuth()`, you can drop this
 * around any route, e.g.:
 *
 *   <Route
 *     path="/admin/*"
 *     element={
 *       <ProtectedRoute allowedRoles={['admin']}>
 *         <AdminApp />
 *       </ProtectedRoute>
 *     }
 *   />
 * ---------------------------------------------------------------------
 */
export default function ProtectedRoute({ allowedRoles, children }) {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
