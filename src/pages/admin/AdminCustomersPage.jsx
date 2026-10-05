export default function AdminCustomersPage() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Customers</h1>
        <button className="rounded-xl bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-accentSoft">
          Add Client
        </button>
      </div>
      <div className="rounded-2xl border border-dashed border-border bg-panel p-10 text-center text-muted">
        No customer data available
      </div>
    </div>
  );
}
