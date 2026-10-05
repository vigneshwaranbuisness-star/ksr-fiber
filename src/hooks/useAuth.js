import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../services/authService';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const logout = async () => {
    try {
      await logoutUser();
      showToast('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      showToast('Failed to logout', 'error');
    }
  };

  return logout;
}

export function useRequireAuth(requiredRole = null) {
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate('/login');
      return;
    }

    if (requiredRole && role !== requiredRole) {
      const redirect = role === 'ADMIN' ? '/admin/dashboard' : '/client/dashboard';
      navigate(redirect);
    }
  }, [user, role, loading, requiredRole, navigate]);

  return { user, role, loading };
}
