import api from "../api/axios";
import type { ClienteDTO } from "../dto/ClienteDTO";

export const listarClientes = async (): Promise<ClienteDTO[]> => {
  const response = await api.get<ClienteDTO[]>("/clientes");
  return response.data;
};

export const crearCliente = async (cliente: ClienteDTO) => {
  const response = await api.post("/clientes", cliente);
  return response.data;
};
