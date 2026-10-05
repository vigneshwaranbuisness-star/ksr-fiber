import clsx from 'clsx';

export default function DashboardCard({ title, value, subtitle, icon: Icon, accent = 'accent' }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{title}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{value}</h3>
          {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
        </div>
        {Icon && (
          <div className={clsx('flex h-11 w-11 items-center justify-center rounded-xl text-black', {
            'bg-accent': accent === 'accent',
            'bg-white': accent === 'white',
            'bg-yellow-400': accent === 'amber',
            'bg-rose-400': accent === 'rose',
          })}>
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
}
