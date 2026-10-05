export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Contact</h1>
      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Support</p>
            <p className="mt-3 text-white">Phone: +91 98765 43210</p>
            <p className="mt-2 text-white">Email: support@ksrfiber.in</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Address</p>
            <p className="mt-3 text-white">KSR Fiber Network Center</p>
            <p className="mt-2 text-white">District: Coimbatore</p>
            <p className="mt-2 text-white">State: Tamil Nadu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
