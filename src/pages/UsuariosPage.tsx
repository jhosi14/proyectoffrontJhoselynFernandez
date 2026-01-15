import { useEffect, useState } from "react";
import type { UsuarioDTO } from "../dto/UsuarioDTO";
import { listarUsuarios } from "../services/UsuarioServices";
import UsuarioForm from "../components/UsuarioForm";
import UsuariosTable from "../components/UsuariosTable";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<UsuarioDTO[]>([]);
  const cargarUsuarios = () => listarUsuarios().then(setUsuarios);

  useEffect(() => { cargarUsuarios(); }, []);

  return (
    <div className="p-8">
      <UsuarioForm onNuevoUsuario={cargarUsuarios} />
      <UsuariosTable usuarios={usuarios} />
    </div>
  );
}
