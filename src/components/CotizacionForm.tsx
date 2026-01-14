import { useEffect, useState } from "react";
import type { ClienteDTO } from "../dto/ClienteDTO";
import type { DetalleCotizacionDTO } from "../dto/CotizacionDTO";
import { listarClientes } from "../api/clientes.api";
import { crearCotizacion } from "../api/cotizaciones.api";
import DetalleCotizacionForm from "./DetalleCotizacionForm";
import { v4 as uuid } from "uuid";

export default function CotizacionForm() {
  const [clientes, setClientes] = useState<ClienteDTO[]>([]);
  const [clienteId, setClienteId] = useState("");
  const [detalles, setDetalles] = useState<DetalleCotizacionDTO[]>([]);

  useEffect(() => {
    listarClientes().then(setClientes);
  }, []);

  const agregarDetalle = () => {
    setDetalles([
      ...detalles,
      {
        id: uuid(),
        descripcion: "",
        cantidad: 1,
        precioUnitario: 0,
      },
    ]);
  };

  const total = detalles.reduce(
    (sum, d) => sum + d.cantidad * d.precioUnitario,
    0
  );

  const guardar = async () => {
    await crearCotizacion({
      fecha: new Date().toISOString(),
      clienteId,
      detalles,
    });

    alert("Cotización creada");
    setDetalles([]);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Nueva Cotización</h2>

      <select
        className="border p-2 w-full mb-4"
        value={clienteId}
        onChange={(e) => setClienteId(e.target.value)}
      >
        <option value="">Seleccione Cliente</option>
        {clientes.map((c) => (
          <option key={c.id} value={c.id}>
            {c.nombre}
          </option>
        ))}
      </select>

      <h3 className="font-bold mb-2">Detalles</h3>

      {detalles.map((d, i) => (
        <DetalleCotizacionForm
          key={d.id}
          detalle={d}
          onChange={(nd) =>
            setDetalles(detalles.map((x, idx) => (idx === i ? nd : x)))
          }
          onRemove={() =>
            setDetalles(detalles.filter((_, idx) => idx !== i))
          }
        />
      ))}

      <button
        type="button"
        onClick={agregarDetalle}
        className="bg-gray-300 px-3 py-1 rounded mt-2"
      >
        + Agregar detalle
      </button>

      <div className="mt-4 font-bold text-right">
        TOTAL: Bs {total}
      </div>

      <button
        onClick={guardar}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Guardar Cotización
      </button>
    </div>
  );
}
