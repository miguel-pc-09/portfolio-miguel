import fotoMiguel from "../assets/foto-miguel.jpeg";

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="contenedor hero__contenedor">
        <div className="hero__texto-zona">
          <p className="hero__saludo">
            React | Angular | Vue | JavaScript | TypeScript | Java | PHP |
            Python | C# | SQL
          </p>

          <h1 className="hero__nombre">Miguel Ángel Perucha</h1>

          <h2 className="hero__titulo">Desarrollador Full Stack</h2>

          <p className="hero__texto">
            Desarrollo aplicaciones web completas, trabajando tanto la parte
            visual como la lógica que hay detrás. Me gusta crear interfaces
            cuidadas, intuitivas y responsive, pero también estructurar el
            backend, trabajar con bases de datos y entender cómo funciona cada
            parte de una aplicación.
          </p>

          <div className="hero__botones">
            <a href="#proyectos" className="boton boton--principal">
              Ver proyectos
            </a>

            <a href="#contacto" className="boton boton--secundario">
              Hablemos
            </a>
          </div>
        </div>

        <div className="hero__imagen-zona">
          <img
            src={fotoMiguel}
            alt="Foto de Miguel Ángel Perucha"
            className="hero__foto"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
