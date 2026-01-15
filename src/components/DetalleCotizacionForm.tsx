import type { DetalleCotizacionDTO } from "../dto/CotizacionDTO";

interface Props {
  detalle: DetalleCotizacionDTO;
  onChange: (d: DetalleCotizacionDTO) => void;
  onRemove: () => void;
}

export default function DetalleCotizacionForm({ detalle, onChange, onRemove }: Props) {
  return (
    <div className="flex gap-2 mb-2 items-center">
      <input className="border p-2 rounded flex-1" placeholder="Descripción" value={detalle.descripcion} onChange={e => onChange({ ...detalle, descripcion: e.target.value })} />
      <input type="number" className="border p-2 rounded w-20" placeholder="Cant." value={detalle.cantidad} onChange={e => onChange({ ...detalle, cantidad: Number(e.target.value) })} />
      <input type="number" className="border p-2 rounded w-24" placeholder="Precio" value={detalle.precioUnitario} onChange={e => onChange({ ...detalle, precioUnitario: Number(e.target.value) })} />
      <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors" onClick={onRemove}>X</button>
    </div>
  );
}
