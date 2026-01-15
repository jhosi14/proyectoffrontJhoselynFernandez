import api from "./axios";
import type { CotizacionDTO } from "../dto/CotizacionDTO";

export const obtenerCotizaciones = async (): Promise<CotizacionDTO[]> => {
  const response = await api.get<CotizacionDTO[]>("/cotizaciones");
  return response.data;
};

export const crearCotizacion = async (cotizacion: CotizacionDTO) => {
  const response = await api.post("/cotizaciones", cotizacion);
  return response.data;
};
