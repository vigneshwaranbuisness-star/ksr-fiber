export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">About KSR FIBER</h1>
      <p className="mt-6 text-lg text-muted">
        KSR FIBER is a modern cable TV and broadband management platform built to support daily operations,
        customer communication, payments, and service monitoring in one secure place.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {['Reliable support', 'Transparent billing', 'Business-ready tools'].map((item) => (
          <div key={item} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-semibold text-white">{item}</h3>
            <p className="mt-3 text-sm text-muted">
              Designed for customer trust, secure data handling, and efficient service operations.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
