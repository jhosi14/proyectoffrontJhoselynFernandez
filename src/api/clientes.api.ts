import api from "axios";
import type { ClienteDTO } from "../dto/ClienteDTO";

export const listarClientes = async (): Promise<ClienteDTO[]> => {
  const response = await api.get<ClienteDTO[]>("/clientes");
  return response.data;
};

export const obtenerCliente = async (id: string): Promise<ClienteDTO> => {
  const response = await api.get<ClienteDTO>(`/clientes/${id}`);
  return response.data;
};

export const crearCliente = async (
  cliente: Omit<ClienteDTO, "id">
): Promise<ClienteDTO> => {
  const response = await api.post<ClienteDTO>("/clientes", cliente);
  return response.data;
};
