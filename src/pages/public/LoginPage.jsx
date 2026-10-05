export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-2">
        <div className="bg-panel p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">KSR FIBER</p>
          <h1 className="mt-5 text-4xl font-bold text-white">Cable TV Management System</h1>
          <p className="mt-4 text-muted">
            Secure customer and admin access with professional billing controls.
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white">Sign in</h2>
          <form className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-muted">Client ID / Admin ID</label>
              <input
                type="text"
                className="w-full rounded-xl border border-border bg-panel px-4 py-3 text-white outline-none ring-0 placeholder:text-muted focus:border-accent"
                placeholder="KSR1001 / admin"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted">Password</label>
              <input
                type="password"
                className="w-full rounded-xl border border-border bg-panel px-4 py-3 text-white outline-none ring-0 placeholder:text-muted focus:border-accent"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full rounded-xl bg-accent px-4 py-3 font-medium text-black hover:bg-accentSoft">
              Login
            </button>
            <div className="text-center">
              <a href="/forgot-password" className="text-sm text-accent hover:text-accentSoft">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
