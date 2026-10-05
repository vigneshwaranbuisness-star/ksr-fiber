export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">Welcome</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Client Name</h1>
        <p className="mt-2 text-muted">Connection Number: KSR-1024</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Current Bill', value: '₹500', subtitle: 'Due: 25 Oct 2026' },
          { title: 'Outstanding Balance', value: '₹200', subtitle: 'Pending payment' },
          { title: 'Current Plan', value: 'Silver HD', subtitle: 'Monthly package' },
          { title: 'Payment Status', value: 'Pending', subtitle: 'Verification required' },
        ].map((stat) => (
          <div key={stat.title} className="rounded-2xl border border-border bg-card p-5" >
            <p className="text-sm text-muted">{stat.title}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{stat.value}</h3>
            <p className="mt-2 text-sm text-muted">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
