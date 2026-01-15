import type { ClienteDTO } from "../dto/ClienteDTO";

interface Props { clientes: ClienteDTO[]; }

export default function ClientesTable({ clientes }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-green-600">Clientes</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-green-100">
          <tr>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">NIT</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(c => (
            <tr key={c.id} className="hover:bg-green-50">
              <td className="border p-2">{c.nombre}</td>
              <td className="border p-2">{c.nit}</td>
              <td className="border p-2">{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
