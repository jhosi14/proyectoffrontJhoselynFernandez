import { useEffect, useState } from "react";
import type { CotizacionDTO } from "../dto/CotizacionDTO";
import { obtenerCotizaciones } from "../services/cotizacionesService";
import CotizacionForm from "../components/CotizacionForm";

export default function CotizacionesPage() {
  const [cotizaciones, setCotizaciones] = useState<CotizacionDTO[]>([]);
  const cargarCotizaciones = () => obtenerCotizaciones().then(setCotizaciones);

  useEffect(() => { cargarCotizaciones(); }, []);

  return (
    <div className="p-8">
      <CotizacionForm onNuevaCotizacion={cargarCotizaciones} />
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Cotizaciones</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-2">Cliente ID</th>
              <th className="border p-2">Fecha</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.map((c, i) => (
              <tr key={i} className="hover:bg-blue-50">
                <td className="border p-2">{c.clienteId}</td>
                <td className="border p-2">{new Date(c.fecha).toLocaleString()}</td>
                <td className="border p-2">{c.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
