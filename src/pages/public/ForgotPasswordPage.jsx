export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-white">Reset password</h1>
        <p className="mt-3 text-muted">
          Use your Client ID or Admin ID to begin password recovery.
        </p>
        <form className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-muted">Client ID / Admin ID</label>
            <input
              type="text"
              className="w-full rounded-xl border border-border bg-panel px-4 py-3 text-white outline-none placeholder:text-muted focus:border-accent"
              placeholder="KSR1001"
            />
          </div>
          <button type="submit" className="w-full rounded-xl bg-accent px-4 py-3 font-medium text-black hover:bg-accentSoft">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
