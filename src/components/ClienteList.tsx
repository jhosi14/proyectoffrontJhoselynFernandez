import type { ClienteDTO } from "../dto/ClienteDTO";

export default function ClienteList({ clientes }: { clientes: ClienteDTO[] }) {
  return (
    <div className="bg-white p-6 rounded shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Clientes</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">NIT</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.id}>
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
