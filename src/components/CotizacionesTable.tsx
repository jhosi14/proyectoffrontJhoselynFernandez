import type { CotizacionDTO } from "../dto/CotizacionDTO";

interface Props {
  cotizaciones: CotizacionDTO[];
}

export default function CotizacionesTable({ cotizaciones }: Props) {
  return (
    <table className="w-full border">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Fecha</th>
          <th className="p-2">Cliente</th>
          <th className="p-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {cotizaciones.map((c) => (
          <tr key={c.id} className="border-t">
            <td className="p-2">{new Date(c.fecha).toLocaleDateString()}</td>
            <td className="p-2">{c.clienteId}</td>
            <td className="p-2">{c.total} Bs</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
