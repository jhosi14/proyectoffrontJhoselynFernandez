import { useEffect, useState } from "react";
import type { ClienteDTO } from "../dto/ClienteDTO";
import type { CotizacionDTO, DetalleCotizacionDTO } from "../dto/CotizacionDTO";
import { listarClientes } from "../services/clientesService";
import { crearCotizacion } from "../services/cotizacionesService";
import DetalleCotizacionForm from "./DetalleCotizacionForm";
import { v4 as uuid } from "uuid";

interface Props { onNuevaCotizacion?: () => void; }

export default function CotizacionForm({ onNuevaCotizacion }: Props) {
  const [clientes, setClientes] = useState<ClienteDTO[]>([]);
  const [clienteId, setClienteId] = useState("");
  const [detalles, setDetalles] = useState<DetalleCotizacionDTO[]>([]);

  useEffect(() => { listarClientes().then(setClientes); }, []);

  const agregarDetalle = () => { setDetalles([...detalles, { id: uuid(), descripcion: "", cantidad: 1, precioUnitario: 0 }]); };
  const total = detalles.reduce((sum, d) => sum + d.cantidad * d.precioUnitario, 0);

  const guardar = async () => {
    if (!clienteId) { alert("Seleccione un cliente"); return; }
    const cotizacion: CotizacionDTO = { fecha: new Date().toISOString(), clienteId, detalles, total };
    await crearCotizacion(cotizacion);
    alert("Cotización creada");
    setDetalles([]); setClienteId("");
    onNuevaCotizacion?.();
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Nueva Cotización</h2>
      <select className="border p-2 w-full mb-4 rounded" value={clienteId} onChange={e => setClienteId(e.target.value)}>
        <option value="">Seleccione Cliente</option>
        {clientes.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
      </select>

      <h3 className="font-semibold mb-2 text-gray-700">Detalles</h3>
      {detalles.map((d, i) => <DetalleCotizacionForm key={d.id} detalle={d} onChange={nd => setDetalles(detalles.map((x, idx) => idx === i ? nd : x))} onRemove={() => setDetalles(detalles.filter((_, idx) => idx !== i))} />)}

      <button type="button" onClick={agregarDetalle} className="bg-gray-300 px-3 py-1 rounded mt-2 hover:bg-gray-400 transition-colors">+ Agregar detalle</button>
      <div className="mt-4 font-bold text-right text-gray-700">TOTAL: Bs {total}</div>
      <button onClick={guardar} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 transition-colors">Guardar Cotización</button>
    </div>
  );
}
