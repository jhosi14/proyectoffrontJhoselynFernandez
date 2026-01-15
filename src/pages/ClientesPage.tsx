// src/pages/ClientesPage.tsx
import { useEffect, useState } from "react";
import { listarClientes, crearCliente } from "../services/clientesService";
import type { ClienteDTO } from "../dto/ClienteDTO";
import Card from "../components/Card";

export default function ClientesPage() {
  const [clientes, setClientes] = useState<ClienteDTO[]>([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [nit, setNit] = useState("");

  const cargarClientes = () => {
    listarClientes().then(setClientes).catch(console.error);
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  const guardarCliente = async () => {
    if (!nombre || !email || !nit) {
      alert("Complete todos los campos");
      return;
    }

    await crearCliente({ id: crypto.randomUUID(), nombre, email, nit });
    setNombre(""); setEmail(""); setNit("");
    cargarClientes();
  };

  return (
    <div>
      <Card title="Registrar Cliente">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="NIT"
            value={nit}
            onChange={(e) => setNit(e.target.value)}
          />
          <button
            onClick={guardarCliente}
            className="bg-blue-600 text-white px-4 py-2 rounded col-span-full md:col-auto"
          >
            Guardar
          </button>
        </div>
      </Card>

      <Card title="Clientes Registrados">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">NIT</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td className="border p-2">{c.nombre}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2">{c.nit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
