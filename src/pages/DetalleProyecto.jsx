import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import proyectos from "../data/proyectos";

function DetalleProyecto() {
  const { slug } = useParams();

  const proyecto = proyectos.find((item) => item.slug === slug);

  useEffect(() => {
    const elementos = document.querySelectorAll(".detalle-proyecto__reveal");

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("detalle-proyecto__reveal--visible");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elementos.forEach((elemento) => observador.observe(elemento));

    return () => {
      elementos.forEach((elemento) => observador.unobserve(elemento));
    };
  }, []);

  if (!proyecto) {
    return (
      <main className="seccion detalle-proyecto">
        <div className="contenedor">
          <div className="detalle-proyecto__cabecera">
            <p className="seccion__mini">Proyecto no encontrado</p>
            <h1>Este proyecto no existe o todavía no está preparado.</h1>

            <Link to="/" className="boton boton--principal">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="seccion detalle-proyecto">
      <div className="contenedor">
        <div className="detalle-proyecto__volver">
          <Link to="/" className="detalle-proyecto__link-volver">
            ← Volver al portfolio
          </Link>
        </div>

        <section className="detalle-proyecto__hero detalle-proyecto__reveal">
          <div className="detalle-proyecto__texto">
            <p className="seccion__mini">{proyecto.categoria}</p>
            <h1>{proyecto.titulo}</h1>

            <p className="detalle-proyecto__intro">
              {proyecto.descripcionLarga}
            </p>

            <div className="detalle-proyecto__estado-demo">
              <div className="detalle-proyecto__estado-bloque">
                <p className="detalle-proyecto__subtitulo-pequeno">Estado</p>
                <span className="tarjeta-proyecto__estado">
                  {proyecto.estado}
                </span>
              </div>

              {proyecto.enlaceDemo && (
                <div className="detalle-proyecto__demo-bloque">
                  <p className="detalle-proyecto__subtitulo-pequeno">
                    Vista del proyecto
                  </p>

                  {proyecto.enlaceDemo.startsWith("http") ? (
                    <a
                      href={proyecto.enlaceDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="detalle-proyecto__boton"
                    >
                      Ver página
                    </a>
                  ) : (
                    <Link
                      to={proyecto.enlaceDemo}
                      className="detalle-proyecto__boton"
                    >
                      Ver demo
                    </Link>
                  )}
                </div>
              )}
            </div>

            <div className="detalle-proyecto__tecnologias-bloque">
              <p className="detalle-proyecto__subtitulo-pequeno">
                Tecnologías usadas
              </p>

              <div className="detalle-proyecto__tecnologias-superior">
                {proyecto.tecnologias.map((tecnologia, indice) => (
                  <span key={indice}>{tecnologia}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="detalle-proyecto__visual">
            <div className="detalle-proyecto__mockup">
              {proyecto.imagen ? (
                <img src={proyecto.imagen} alt={proyecto.titulo} />
              ) : (
                <span>{proyecto.titulo}</span>
              )}
            </div>
          </div>
        </section>

        <section className="detalle-proyecto__bloques-zigzag">
          <article className="detalle-proyecto__bloque-zigzag detalle-proyecto__bloque-zigzag--izquierda detalle-proyecto__reveal">
            <p className="detalle-proyecto__etiqueta">Objetivo</p>
            <h2>Qué quería conseguir con este proyecto</h2>
            <p>{proyecto.objetivo}</p>
          </article>

          <article className="detalle-proyecto__bloque-zigzag detalle-proyecto__bloque-zigzag--derecha detalle-proyecto__reveal">
            <p className="detalle-proyecto__etiqueta">Enfoque</p>
            <h2>Cómo está planteado</h2>
            <p>{proyecto.estadoDetalle}</p>
          </article>

          <article className="detalle-proyecto__bloque-zigzag detalle-proyecto__bloque-zigzag--izquierda detalle-proyecto__reveal">
            <p className="detalle-proyecto__etiqueta">Qué trabajé</p>
            <h2>Qué cuidé al diseñarlo</h2>
            <p>{proyecto.trabajoRealizado}</p>
          </article>

          <article className="detalle-proyecto__bloque-zigzag detalle-proyecto__bloque-zigzag--centrado detalle-proyecto__reveal">
            <p className="detalle-proyecto__etiqueta">Funcionalidades</p>
            <h2>Lo más importante que muestra este proyecto</h2>

            <ul className="detalle-proyecto__lista-libre">
              {proyecto.funcionalidades.map((item, indice) => (
                <li key={indice}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}

export default DetalleProyecto;
