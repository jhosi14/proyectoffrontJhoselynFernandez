import type { DetalleCotizacionDTO } from "../dto/CotizacionDTO";

export default function DetalleCotizacionForm({
  detalle,
  onChange,
  onRemove,
}: {
  detalle: DetalleCotizacionDTO;
  onChange: (d: DetalleCotizacionDTO) => void;
  onRemove: () => void;
}) {
  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      <input
        className="border p-2"
        placeholder="Descripción"
        value={detalle.descripcion}
        onChange={(e) =>
          onChange({ ...detalle, descripcion: e.target.value })
        }
      />

      <input
        type="number"
        className="border p-2"
        placeholder="Cantidad"
        value={detalle.cantidad}
        onChange={(e) =>
          onChange({ ...detalle, cantidad: Number(e.target.value) })
        }
      />

      <input
        type="number"
        className="border p-2"
        placeholder="Precio"
        value={detalle.precioUnitario}
        onChange={(e) =>
          onChange({ ...detalle, precioUnitario: Number(e.target.value) })
        }
      />

      <div className="flex items-center">
        <span className="font-bold">
          Bs {detalle.cantidad * detalle.precioUnitario}
        </span>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="bg-red-500 text-white px-2 rounded"
      >
        X
      </button>
    </div>
  );
}
