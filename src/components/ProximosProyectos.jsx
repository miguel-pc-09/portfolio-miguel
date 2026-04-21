import { ideasProyectos } from "../data/proyectos";
import TarjetaProyecto from "./TarjetaProyecto";

function ProximosProyectos() {
  return (
    <section className="seccion proyectos" id="ideas-proyectos">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="seccion__mini">
            Ideas que quiero desarrollar más adelante
          </p>
          <h2>Ideas de proyectos</h2>
        </div>

        <div className="proyectos__grid">
          {ideasProyectos.map((proyecto) => (
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

export default ProximosProyectos;
