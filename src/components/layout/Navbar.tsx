export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center px-4 shadow-sm">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-100" aria-label="menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <span className="text-lg font-semibold">My Dashboard</span>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <input
            className="w-64 pl-3 pr-10 py-2 rounded-md border bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100">
          <img src={`${import.meta.env.BASE_URL}avatar-placeholder.png`} alt="avatar" className="w-8 h-8 rounded-full object-cover"/>
          <span className="text-sm">Admin</span>
        </button>
      </div>
    </header>
  )
}
