import api from "./axios";
import type { CotizacionDTO } from "../dto/CotizacionDTO";

export const listarCotizaciones = async (): Promise<CotizacionDTO[]> => {
  const response = await api.get<CotizacionDTO[]>("/cotizaciones");
  return response.data;
};

export const crearCotizacion = async (
  cotizacion: Omit<CotizacionDTO, "id" | "total">
): Promise<CotizacionDTO> => {
  const response = await api.post<CotizacionDTO>("/cotizaciones", cotizacion);
  return response.data;
};
