type NavItem = { name: string; href?: string; icon?: any };

const items: NavItem[] = [
  { name: "Overview", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18"/></svg> },
  { name: "Orders", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M3 3h18v18H3z"/></svg> },
  { name: "Customers", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="3"/><path strokeWidth="2" d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg> },
  { name: "Products", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen hidden md:block">
      <div className="p-4 text-lg font-bold">Brand</div>
      <nav className="px-2">
        {items.map((it) => (
          <a key={it.name} href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
            <span className="text-gray-600">{it.icon}</span>
            <span>{it.name}</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto p-4 text-xs text-gray-500">© {new Date().getFullYear()}</div>
    </aside>
  )
}
