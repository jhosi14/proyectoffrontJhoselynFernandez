import { useState } from "react";
import { v4 as uuid } from "uuid";
import type { ClienteDTO } from "../dto/ClienteDTO";
import { crearCliente } from "../services/clientesService";

interface Props { onNuevoCliente?: () => void; }

export default function ClienteForm({ onNuevoCliente }: Props) {
  const [nombre, setNombre] = useState("");
  const [nit, setNit] = useState("");
  const [email, setEmail] = useState("");

  const guardar = async () => {
    if (!nombre || !nit || !email) { alert("Complete todos los campos"); return; }
    const cliente: ClienteDTO = { id: uuid(), nombre, nit, email };
    await crearCliente(cliente);
    alert("Cliente creado");
    setNombre(""); setNit(""); setEmail("");
    onNuevoCliente?.();
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Nuevo Cliente</h2>
      <input className="border p-2 w-full mb-2 rounded" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input className="border p-2 w-full mb-2 rounded" placeholder="NIT" value={nit} onChange={e => setNit(e.target.value)} />
      <input className="border p-2 w-full mb-2 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2 transition-colors" onClick={guardar}>Guardar Cliente</button>
    </div>
  );
}
