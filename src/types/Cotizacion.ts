export interface DetalleCotizacion {
  id: string
  descripcion: string
  cantidad: number
  precioUnitario: number
}

export interface Cotizacion {
  id: string
  fecha: string
  clienteId: string
  total: number
  detalles: DetalleCotizacion[]
}
