export interface DetalleCotizacionDTO {
  id?: string;
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
}

export interface CotizacionDTO {
  id?: string;
  fecha: string;
  clienteId: string;
  total: number;
  detalles: DetalleCotizacionDTO[];
}
