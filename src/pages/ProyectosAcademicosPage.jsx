import { proyectosAcademicos } from "../data/proyectos";
import TarjetaProyecto from "../components/TarjetaProyecto";

function ProyectosAcademicosPage() {
  const categorias = [
    { id: "java", nombre: "Java" },
    { id: "csharp", nombre: "C#" },
    { id: "javascript", nombre: "JavaScript" },
    { id: "typescript", nombre: "TypeScript" },
    { id: "python", nombre: "Python" },
    { id: "angular", nombre: "Angular" },
    { id: "react", nombre: "React" },
    { id: "vue", nombre: "Vue" },
    { id: "html-css", nombre: "HTML / CSS" },
    { id: "php", nombre: "PHP" },
    { id: "bases-datos", nombre: "Bases de datos" },
  ];

  // Comprueba si un proyecto pertenece a una categoría.
  const perteneceACategoria = (proyecto, categoria) => {
    if (categoria === "typescript") {
      return proyecto.tecnologias.includes("TypeScript");
    }

    return proyecto.seccion === categoria;
  };

  return (
    <main className="academicos-page">
      <section className="academicos-page__cabecera animar">
        <div className="contenedor">
          <p className="seccion__mini">Trabajos de la formación</p>

          <h1>Proyectos académicos</h1>

          <p className="academicos-page__introduccion">
            Recopilación de proyectos y ejercicios realizados durante mi
            formación, organizados por tecnologías.
          </p>

          <nav
            className="academicos-page__navegacion"
            aria-label="Categorías de proyectos académicos"
          >
            {categorias.map((categoria) => (
              <a key={categoria.id} href={`#${categoria.id}`}>
                {categoria.nombre}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="contenedor academicos-page__contenido">
        {categorias.map((categoria) => {
          const proyectosCategoria = proyectosAcademicos.filter((proyecto) =>
            perteneceACategoria(proyecto, categoria.id),
          );

          return (
            <section
              key={categoria.id}
              id={categoria.id}
              className="academicos-page__seccion animar"
            >
              <div className="academicos-page__titulo">
                <p className="seccion__mini">Proyectos y ejercicios</p>
                <h2>{categoria.nombre}</h2>
              </div>

              {proyectosCategoria.length > 0 ? (
                <div className="proyectos__grid">
                  {proyectosCategoria.map((proyecto) => (
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
              ) : (
                <p className="academicos-page__vacio">
                  Próximamente se añadirán proyectos de {categoria.nombre}.
                </p>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default ProyectosAcademicosPage;
