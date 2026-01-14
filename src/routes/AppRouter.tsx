import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Clientes from '../pages/ClientesPage'
import Cotizaciones from '../pages/CotizacionesPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN (sin layout) */}
        <Route path="/" element={<Login />} />

        {/* SISTEMA */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/cotizaciones" element={<Cotizaciones />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
