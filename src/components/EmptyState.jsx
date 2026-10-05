export default function EmptyState({ message = 'No records found.' }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-border bg-card p-6 text-center">
      <div>
        <p className="text-lg font-medium text-white">{message}</p>
      </div>
    </div>
  );
}
