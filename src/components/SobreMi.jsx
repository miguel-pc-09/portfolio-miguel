function SobreMi() {
  const tecnologiasPorCategoria = {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Vue",
      "Bootstrap",
      "Tailwind CSS",
    ],
    Backend: ["Java", "PHP", "Python", "C#", "Supabase"],
    "Bases de datos": ["SQL", "MySQL", "MariaDB", "PostgreSQL"],
    "Herramientas y despliegue": [
      "Git",
      "GitHub",
      "Postman",
      "Vite",
      "Netlify",
      "Vercel",
    ],
  };

  return (
    <section className="seccion sobre-mi" id="sobre-mi">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="seccion__mini">Sobre mí</p>

          <h2>Me gusta construir aplicaciones de principio a fin</h2>
        </div>

        <div className="sobre-mi__grid">
          <div className="sobre-mi__texto">
            <p>
              Soy desarrollador Full Stack con formación en Desarrollo de
              Aplicaciones Web. Me gusta trabajar tanto en frontend como en
              backend y entender cómo encajan todas las partes de una
              aplicación.
            </p>

            <p>
              En frontend disfruto especialmente convirtiendo una idea inicial
              en una interfaz real. Cuido mucho los detalles, los espacios, el
              responsive y la facilidad de uso. Me gusta que una aplicación no
              solo funcione, sino que también sea clara, intuitiva y agradable
              de utilizar.
            </p>

            <p>
              En backend me atrae la parte que el usuario no ve: la lógica, la
              organización de los datos, las bases de datos y los procesos que
              hacen que todo funcione correctamente por dentro.
            </p>

            <p>
              A la hora de comenzar un proyecto intento aplicar una idea que
              aprendí durante mi formación: dividir un problema grande en partes
              más pequeñas. Suelo plantear primero la estructura y las
              necesidades, muchas veces sobre papel, y después voy construyendo
              cada parte paso a paso.
            </p>

            <p>
              Sigo aprendiendo y mejorando con cada proyecto, intentando que
              cada uno me obligue a trabajar algo nuevo y a buscar soluciones
              diferentes.
            </p>
          </div>

          <div className="sobre-mi__tecnologias">
            <h3>Tecnologías y herramientas</h3>

            <div className="sobre-mi__categorias">
              {Object.entries(tecnologiasPorCategoria).map(
                ([categoria, tecnologias]) => (
                  <div className="sobre-mi__categoria" key={categoria}>
                    <h4>{categoria}</h4>

                    <div className="etiquetas">
                      {tecnologias.map((tecnologia) => (
                        <span key={tecnologia}>{tecnologia}</span>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
