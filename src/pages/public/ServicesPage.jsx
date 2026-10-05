export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Services</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          { title: 'Cable TV Plans', description: 'Set up subscription plans and manage monthly service charges.' },
          { title: 'Customer Accounts', description: 'Create and maintain efficient customer records with secure access.' },
          { title: 'Payments & Invoices', description: 'Track payments, approvals, due dates, and invoice history.' },
        ].map((service) => (
          <div key={service.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
