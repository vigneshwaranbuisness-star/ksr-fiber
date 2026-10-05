import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import ServicesPage from './pages/public/ServicesPage';
import ContactPage from './pages/public/ContactPage';
import LoginPage from './pages/public/LoginPage';
import ForgotPasswordPage from './pages/public/ForgotPasswordPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCustomersPage from './pages/admin/AdminCustomersPage';
import AdminPlansPage from './pages/admin/AdminPlansPage';
import AdminBillsPage from './pages/admin/AdminBillsPage';
import AdminPaymentsPage from './pages/admin/AdminPaymentsPage';
import AdminInvoicesPage from './pages/admin/AdminInvoicesPage';
import AdminComplaintsPage from './pages/admin/AdminComplaintsPage';
import AdminNotificationsPage from './pages/admin/AdminNotificationsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import AdminAuditLogsPage from './pages/admin/AdminAuditLogsPage';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientBillsPage from './pages/client/ClientBillsPage';
import ClientPaymentsPage from './pages/client/ClientPaymentsPage';
import ClientInvoicesPage from './pages/client/ClientInvoicesPage';
import ClientComplaintsPage from './pages/client/ClientComplaintsPage';
import ClientNotificationsPage from './pages/client/ClientNotificationsPage';
import ClientProfilePage from './pages/client/ClientProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

export default function App() {
  const { user, loading, role } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg text-white">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-border border-t-accent" />
          <p className="mt-4 text-sm text-muted">Loading KSR FIBER...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={role === 'ADMIN' ? '/admin/dashboard' : '/client/dashboard'} replace />} />

      <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['ADMIN']} /> }>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="customers" element={<AdminCustomersPage />} />
        <Route path="plans" element={<AdminPlansPage />} />
        <Route path="bills" element={<AdminBillsPage />} />
        <Route path="payments" element={<AdminPaymentsPage />} />
        <Route path="invoices" element={<AdminInvoicesPage />} />
        <Route path="complaints" element={<AdminComplaintsPage />} />
        <Route path="notifications" element={<AdminNotificationsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
        <Route path="audit-logs" element={<AdminAuditLogsPage />} />
      </Route>

      <Route path="/client/*" element={<ProtectedRoute allowedRoles={['CLIENT']} /> }>
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="bills" element={<ClientBillsPage />} />
        <Route path="payments" element={<ClientPaymentsPage />} />
        <Route path="invoices" element={<ClientInvoicesPage />} />
        <Route path="complaints" element={<ClientComplaintsPage />} />
        <Route path="notifications" element={<ClientNotificationsPage />} />
        <Route path="profile" element={<ClientProfilePage />} />
      </Route>

      <Route path="/login" element={<Navigate to={role === 'ADMIN' ? '/admin/dashboard' : '/client/dashboard'} replace />} />
      <Route path="*" element={<Navigate to={role === 'ADMIN' ? '/admin/dashboard' : '/client/dashboard'} replace />} />
    </Routes>
  );
}
