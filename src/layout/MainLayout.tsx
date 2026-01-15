import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold"></div>
        <nav className="flex-1">
          <ul>
            <li>
              <Link to="/dashboard" className="block py-3 px-6 hover:bg-blue-800 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/clientes" className="block py-3 px-6 hover:bg-blue-800 transition">
                Clientes
              </Link>
            </li>
            <li>
              <Link to="/cotizaciones" className="block py-3 px-6 hover:bg-blue-800 transition">
                Cotizaciones
              </Link>
            </li>
            <li>
              <Link to="/usuarios" className="block py-3 px-6 hover:bg-blue-800 transition">
                Usuarios
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-blue-800">
          <button className="w-full py-2 bg-red-500 hover:bg-red-600 rounded">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
