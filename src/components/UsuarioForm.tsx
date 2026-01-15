import { useState } from "react";
import { v4 as uuid } from "uuid";
import type { UsuarioDTO } from "../dto/UsuarioDTO";
import { crearUsuario } from "../services/UsuarioServices";

interface Props { onNuevoUsuario?: () => void; }

export default function UsuarioForm({ onNuevoUsuario }: Props) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const guardar = async () => {
    if (!nombre || !email || !password) { alert("Complete todos los campos"); return; }
    const usuario: UsuarioDTO = { id: uuid(), nombre, email, rol: "Usuario" };
    await crearUsuario(usuario);
    alert("Usuario creado");
    setNombre(""); setEmail(""); setPassword("");
    onNuevoUsuario?.();
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">Nuevo Usuario</h2>
      <input className="border p-2 w-full mb-2 rounded" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input className="border p-2 w-full mb-2 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="border p-2 w-full mb-2 rounded" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded mt-2 transition-colors" onClick={guardar}>Guardar Usuario</button>
    </div>
  );
}
