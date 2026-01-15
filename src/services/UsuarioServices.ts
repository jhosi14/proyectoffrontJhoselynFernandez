import api from "../api/axios";
import type { UsuarioDTO } from "../dto/UsuarioDTO";

export const listarUsuarios = async () => {
  const response = await api.get<UsuarioDTO[]>("/usuarios");
  return response.data;
};

export const crearUsuario = async (usuario: UsuarioDTO) => {
  const response = await api.post("/usuarios", usuario);
  return response.data;
};
