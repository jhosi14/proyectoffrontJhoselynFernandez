import type { CotizacionDTO } from "../dto/CotizacionDTO";

interface Props {
  cotizaciones: CotizacionDTO[];
}

export default function CotizacionesTable({ cotizaciones }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Cotizaciones</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Cliente ID</th>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map(c => (
            <tr key={c.id}>
              <td className="border p-2">{c.clienteId}</td>
              <td className="border p-2">{new Date(c.fecha).toLocaleDateString()}</td>
              <td className="border p-2">Bs {c.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
