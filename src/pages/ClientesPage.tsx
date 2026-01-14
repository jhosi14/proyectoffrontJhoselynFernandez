import React, { useEffect, useState } from "react";
import type { ClienteDTO } from "../dto/ClienteDTO";
import { getClientes, crearCliente } from "../services/clienteService";

export const ClientesPage = () => {
  const [clientes, setClientes] = useState<ClienteDTO[]>([]);
  const [nombre, setNombre] = useState("");
  const [nit, setNit] = useState("");
  const [email, setEmail] = useState("");

  const fetchClientes = async () => {
    const data = await getClientes();
    setClientes(data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await crearCliente({ nombre, nit, email });
    setNombre("");
    setNit("");
    setEmail("");
    fetchClientes();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="NIT"
          value={nit}
          onChange={(e) => setNit(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Crear Cliente
        </button>
      </form>

      <ul className="space-y-2">
        {clientes.map((c) => (
          <li key={c.id} className="border p-2 rounded">
            {c.nombre} - {c.nit} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
