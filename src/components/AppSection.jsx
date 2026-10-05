export default function AppSection({ title, children, action }) {
  return (
    <section className="rounded-2xl border border-border bg-panel p-5 shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
