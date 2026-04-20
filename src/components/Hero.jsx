import fotoMiguel from "../assets/foto-miguel.jpeg";

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="contenedor hero__contenedor">
        <div className="hero__texto-zona">
          <p className="hero__saludo">
            React | JavaScript (ES6+) | TypeScript | HTML5 | CSS3 | Git/GitHub
          </p>

          <h1 className="hero__nombre">Miguel Ángel Perucha</h1>

          <h2 className="hero__titulo">Desarrollador Frontend Junior</h2>

          <p className="hero__texto">
            Desarrollo aplicaciones web claras, funcionales y responsive,
            centradas en la experiencia de usuario. Actualmente estoy ampliando
            mis conocimientos en frontend creando proyectos reales.
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
