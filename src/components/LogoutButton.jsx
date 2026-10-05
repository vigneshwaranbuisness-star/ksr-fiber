import { LogOut } from 'lucide-react';
import { useLogout } from '../hooks/useAuth';

export function LogoutButton() {
  const logout = useLogout();

  return (
    <button
      onClick={logout}
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-white hover:bg-panel transition"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </button>
  );
}
