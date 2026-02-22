import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/admin" },
  { label: "Users", href: "/admin#users" },
  { label: "Subscriptions", href: "/admin#subscriptions" },
  { label: "Clinical Pipeline", href: "/admin#pipeline" },
  { label: "Reports", href: "/admin#reports" }
];

export default function AdminSidebar() {
  return (
    <aside className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
        Admin Navigation
      </p>
      <nav className="mt-6 space-y-4" aria-label="Admin">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-sm font-semibold text-brand-navy hover:text-brand-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
