import { NavLink, Outlet } from "react-router-dom";
import { ShieldAlert, ListTree, ScrollText, Settings } from "lucide-react";

const navItems = [
  { to: "/", label: "Incidents", icon: ListTree, end: true },
  { to: "/audit", label: "Audit log", icon: ScrollText, end: false },
];

export function AppLayout() {
  return (
    <div className="flex h-screen bg-base-950">
      <aside className="flex w-60 flex-shrink-0 flex-col border-r border-base-700 bg-base-900">
        <div className="flex items-center gap-2 border-b border-base-700 px-5 py-5">
          <ShieldAlert size={20} className="text-signal-critical" strokeWidth={2.25} />
          <span className="font-mono text-sm font-semibold tracking-tight text-base-100">
            securiq
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-base-700 text-base-100"
                    : "text-base-300 hover:bg-base-800 hover:text-base-100"
                }`
              }
            >
              <Icon size={16} strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-base-700 px-3 py-3">
          <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-base-300 hover:bg-base-800 hover:text-base-100">
            <Settings size={16} strokeWidth={2} />
            Settings
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
