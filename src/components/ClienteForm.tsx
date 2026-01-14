import { useState } from "react";
import { crearCliente } from "../api/clientes.api";

export default function ClienteForm({ onCreated }: { onCreated: () => void }) {
  const [nombre, setNombre] = useState("");
  const [nit, setNit] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await crearCliente({
      nombre,
      nit,
      email,
    });

    setNombre("");
    setNit("");
    setEmail("");
    onCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold">Nuevo Cliente</h2>

      <input
        className="w-full border p-2 rounded"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="NIT"
        value={nit}
        onChange={(e) => setNit(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Guardar
      </button>
    </form>
  );
}
