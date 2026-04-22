import proyectos from "../data/proyectos";
import TarjetaProyecto from "./TarjetaProyecto";

function Proyectos() {
  return (
    <section className="seccion proyectos animar" id="proyectos">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="seccion__mini">Trabajos que ya tengo terminados</p>
          <h2>Proyectos</h2>
        </div>

        <div className="proyectos__grid">
          {proyectos.map((proyecto) => (
            <TarjetaProyecto
              key={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              estado={proyecto.estado}
              slug={proyecto.slug}
              imagen={proyecto.imagen}
              demo={proyecto.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
