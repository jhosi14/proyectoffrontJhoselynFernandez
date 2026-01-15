import type { UsuarioDTO } from "../dto/UsuarioDTO";

interface Props { usuarios: UsuarioDTO[]; }

export default function UsuariosTable({ usuarios }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Usuarios</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-orange-100">
          <tr>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id} className="hover:bg-orange-50">
              <td className="border p-2">{u.nombre}</td>
              <td className="border p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
