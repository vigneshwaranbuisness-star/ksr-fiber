import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ allowedRoles = [] }) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-bg text-white">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to={role === 'ADMIN' ? '/admin/dashboard' : '/client/dashboard'} replace />;
  }

  return <Outlet />;
}
