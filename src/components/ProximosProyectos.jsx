function ProximosProyectos() {
  return (
    <section className="seccion proximos-proyectos">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="seccion__mini">Lo siguiente que quiero añadir</p>
          <h2>Más secciones del portfolio</h2>
        </div>

        <div className="proximos-proyectos__grid">
          <article className="proximos-proyectos__tarjeta">
            <div className="proximos-proyectos__cabecera">
              <h3>Proyectos académicos</h3>
              <span className="proximos-proyectos__estado">
                En construcción
              </span>
            </div>

            <p>
              Aquí irán mis proyectos de clase y de la universidad, organizados
              de forma más clara para enseñar mejor lo que he trabajado en
              frontend, backend, bases de datos y desarrollo de aplicaciones.
            </p>

            <div className="proximos-proyectos__etiquetas">
              <span>Universidad</span>
              <span>DAW</span>
              <span>Próximamente</span>
            </div>
          </article>

          <article className="proximos-proyectos__tarjeta">
            <div className="proximos-proyectos__cabecera">
              <h3>Proyectos personales</h3>
              <span className="proximos-proyectos__estado">
                En construcción
              </span>
            </div>

            <p>
              En esta parte quiero reunir ideas y proyectos propios que vaya
              desarrollando por mi cuenta, con una explicación más detallada de
              cada uno y de lo que busco mejorar con ellos.
            </p>

            <div className="proximos-proyectos__etiquetas">
              <span>Personal</span>
              <span>Frontend</span>
              <span>Próximamente</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProximosProyectos;
