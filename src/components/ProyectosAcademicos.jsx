import { Link } from "react-router-dom";
import { proyectosAcademicos } from "../data/proyectos";
import TarjetaProyecto from "./TarjetaProyecto";

function ProyectosAcademicos() {
  // Proyectos seleccionados para mostrar en la página principal.
  const proyectosDestacadosIds = [104, 105, 102, 108, 117, 111];

  const proyectosDestacados = proyectosDestacadosIds
    .map((id) => proyectosAcademicos.find((proyecto) => proyecto.id === id))
    .filter(Boolean);

  return (
    <section className="seccion proyectos animar" id="proyectos-academicos">
      <div className="contenedor">
        <div className="seccion__encabezado seccion__encabezado--con-enlace">
          <div>
            <p className="seccion__mini">Trabajos de la formación</p>
            <h2>Proyectos académicos</h2>
            <p className="seccion__descripcion">
              Una selección de los proyectos realizados durante mi formación.
              Puedes consultar el resto, organizados por tecnologías, pulsando
              en «Ver todos».
            </p>
          </div>

          <Link to="/proyectos-academicos" className="seccion__ver-todos">
            Ver todos →
          </Link>
        </div>

        <div className="proyectos__grid">
          {proyectosDestacados.map((proyecto) => (
            <TarjetaProyecto
              key={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              estado={proyecto.estado}
              slug={proyecto.slug}
              imagen={proyecto.imagen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProyectosAcademicos;
