import { NavLink, Outlet } from 'react-router-dom';
import { Cable, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function PublicLayout() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/login', label: 'Login' },
  ];

  return (
    <div className="min-h-screen bg-bg text-white">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Cable className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold">KSR FIBER</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted">Cable TV</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition ${isActive ? 'text-white' : 'text-muted hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/login"
            className="rounded-xl border border-accent bg-accent px-4 py-2 text-sm font-medium text-black transition hover:bg-accentSoft"
          >
            Login
          </NavLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border bg-panel">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-semibold">KSR FIBER</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted">Billing System</div>
              </div>
            </div>
            <p className="text-sm text-muted">
              Reliable cable TV management, customer billing, and digital service support.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> support@ksrfiber.in</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Service Hours
            </h3>
            <p className="text-sm text-white/80">Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p className="mt-2 text-sm text-white/80">Sunday: Support by appointment</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
