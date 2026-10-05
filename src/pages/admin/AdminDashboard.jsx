import { CreditCard, Users, TrendingUp, CircleDollarSign } from 'lucide-react';
import DashboardCard from '../../components/DashboardCard';
import AppSection from '../../components/AppSection';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Clients', value: '0', subtitle: 'No customer data available', icon: Users, accent: 'accent' },
    { title: 'Active Clients', value: '0', subtitle: 'No customer data available', icon: TrendingUp, accent: 'white' },
    { title: 'Suspended Clients', value: '0', subtitle: 'No customer data available', icon: CreditCard, accent: 'amber' },
    { title: 'Pending Payments', value: '₹0', subtitle: 'No customer data available', icon: CircleDollarSign, accent: 'rose' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} {...stat} />
        ))}
      </div>

      <AppSection title="Overview">
        <div className="rounded-2xl border border-dashed border-border bg-panel p-6 text-center text-muted">
          No customer data available
        </div>
      </AppSection>
    </div>
  );
}
