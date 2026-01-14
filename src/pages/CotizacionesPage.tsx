import { useEffect, useState } from "react";
import type { CotizacionDTO } from "../dto/CotizacionDTO";
import { obtenerCotizaciones } from "../services/cotizacionesService";
import CotizacionForm from "../components/CotizacionForm";
import CotizacionesTable from "../components/CotizacionesTable";

export default function CotizacionesPage() {
  const [cotizaciones, setCotizaciones] = useState<CotizacionDTO[]>([]);

  const cargarCotizaciones = () => {
    obtenerCotizaciones().then(setCotizaciones);
  };

  useEffect(() => {
    cargarCotizaciones();
  }, []);

  return (
    <div className="p-8">
      <CotizacionForm onNuevaCotizacion={cargarCotizaciones} />
      <CotizacionesTable cotizaciones={cotizaciones} />
    </div>
  );
}
