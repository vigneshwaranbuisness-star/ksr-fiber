import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, CreditCard, ReceiptText, MessageSquareText, Bell, UserCircle, LogOut } from 'lucide-react';

const navigation = [
  { label: 'Dashboard', path: '/client/dashboard', icon: LayoutDashboard },
  { label: 'Bills', path: '/client/bills', icon: FileText },
  { label: 'Payments', path: '/client/payments', icon: CreditCard },
  { label: 'Invoices', path: '/client/invoices', icon: ReceiptText },
  { label: 'Complaints', path: '/client/complaints', icon: MessageSquareText },
  { label: 'Notifications', path: '/client/notifications', icon: Bell },
  { label: 'Profile', path: '/client/profile', icon: UserCircle },
];

export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-border bg-panel p-5 md:block">
          <div className="mb-8 flex items-center gap-3 px-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">K</div>
            <div>
              <div className="text-lg font-semibold">KSR FIBER</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted">Client Portal</div>
            </div>
          </div>

          <nav className="space-y-2">
            {navigation.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive ? 'bg-accent text-black' : 'text-muted hover:bg-card hover:text-white'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-border bg-card p-4">
            <p className="text-muted text-xs uppercase tracking-[0.2em]">Session</p>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-white hover:bg-panel">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 bg-bg">
          <header className="border-b border-border bg-panel/80 px-4 py-4 backdrop-blur-sm sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Welcome back</p>
                <h1 className="text-xl font-semibold">Client Portal</h1>
              </div>
              <div className="rounded-full border border-border bg-card px-3 py-2 text-xs text-muted">
                CLIENT
              </div>
            </div>
          </header>

          <div className="p-4 sm:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
