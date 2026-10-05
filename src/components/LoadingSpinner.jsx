export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-3 text-sm text-muted">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-accent" />
        Loading...
      </div>
    </div>
  );
}
