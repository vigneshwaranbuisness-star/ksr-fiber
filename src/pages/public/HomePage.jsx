import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Premium service</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Smart cable billing for modern fiber communities.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            KSR FIBER helps cable service businesses manage billing, customer data, payment verification, and support workflows from a single responsive platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/login" className="rounded-xl bg-accent px-5 py-3 font-medium text-black hover:bg-accentSoft">
              Login
            </Link>
            <a href="#services" className="rounded-xl border border-border px-5 py-3 font-medium text-white hover:bg-card">
              Explore Services
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-panel p-4">
              <p className="text-sm text-muted">Active clients</p>
              <h3 className="mt-2 text-3xl font-bold">1,000+</h3>
            </div>
            <div className="rounded-2xl border border-border bg-panel p-4">
              <p className="text-sm text-muted">Monthly collection</p>
              <h3 className="mt-2 text-3xl font-bold">₹8.5L</h3>
            </div>
            <div className="rounded-2xl border border-border bg-panel p-4 sm:col-span-2">
              <p className="text-sm text-muted">Service health</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-border">
                <div className="h-full w-[82%] rounded-full bg-accent" />
              </div>
              <p className="mt-2 text-sm text-muted">82% customer retention</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Services</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Built for cable business operations</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            'Customer management',
            'Billing & invoices',
            'Payment verification',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm text-muted">
                Modern tools for tracking subscriptions, pending bills, and account health with confidence.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Support</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Need a new connection or account help?</h3>
            </div>
            <div className="rounded-2xl border border-border bg-panel p-5">
              <p className="text-sm text-muted">New connection enquiries</p>
              <div className="mt-4 space-y-2 text-sm text-white/80">
                <p>Phone: +91 98765 43210</p>
                <p>Email: support@ksrfiber.in</p>
                <p>Address: KSR Fiber Network Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
