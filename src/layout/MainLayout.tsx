import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold text-lg">UrbanSIG</h1>

        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/clientes" className="hover:underline">Clientes</Link>
          <Link to="/cotizaciones" className="hover:underline">Cotizaciones</Link>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="p-6">
        <Outlet />
      </main>

    </div>
  )
}
