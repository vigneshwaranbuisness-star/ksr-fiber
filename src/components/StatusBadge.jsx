export default function StatusBadge({ status }) {
  const variants = {
    active: 'bg-accent/15 text-accent',
    suspended: 'bg-yellow-500/15 text-yellow-300',
    archived: 'bg-rose-500/15 text-rose-300',
    pending: 'bg-yellow-500/15 text-yellow-300',
    paid: 'bg-accent/15 text-accent',
    partial: 'bg-blue-500/15 text-blue-300',
    overdue: 'bg-rose-500/15 text-rose-300',
    rejected: 'bg-rose-500/15 text-rose-300',
    approved: 'bg-accent/15 text-accent',
    default: 'bg-card text-white',
  };

  const normalized = String(status || 'default').toLowerCase();
  const className = variants[normalized] || variants.default;

  return (
    <span className={`inline-flex rounded-full border border-transparent px-2 py-1 text-xs font-medium ${className}`}>
      {status || 'Unknown'}
    </span>
  );
}
