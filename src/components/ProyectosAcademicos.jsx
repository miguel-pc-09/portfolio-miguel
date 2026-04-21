import { proyectosAcademicos } from "../data/proyectos";
import TarjetaProyecto from "./TarjetaProyecto";

function ProyectosAcademicos() {
  return (
    <section className="seccion proyectos" id="proyectos-academicos">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="seccion__mini">Trabajos de clase y universidad</p>
          <h2>Proyectos académicos</h2>
        </div>

        <div className="proyectos__grid">
          {proyectosAcademicos.map((proyecto) => (
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
