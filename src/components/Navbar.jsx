import logo from "../assets/logo.png";
import { FaChevronRight, FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar({ temaOscuro, cambiarTema }) {
  const location = useLocation();
  const estasEnInicio = location.pathname === "/";

  // Desplazamiento suave entre secciones de la página principal.
  const irASeccion = (evento, id) => {
    if (!estasEnInicio) {
      return;
    }

    evento.preventDefault();

    const seccion = document.getElementById(id);

    if (seccion) {
      seccion.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__contenido">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Logo MAPC" />
        </Link>

        <div className="navbar__enlaces">
          {estasEnInicio ? (
            <a
              href="#inicio"
              onClick={(evento) => irASeccion(evento, "inicio")}
            >
              Inicio
            </a>
          ) : (
            <Link to="/">Inicio</Link>
          )}

          {estasEnInicio ? (
            <a
              href="#sobre-mi"
              onClick={(evento) => irASeccion(evento, "sobre-mi")}
            >
              Sobre mí
            </a>
          ) : (
            <Link to="/#sobre-mi">Sobre mí</Link>
          )}

          <div className="navbar__desplegable">
            <button className="navbar__desplegable-boton">Proyectos</button>

            <div className="navbar__desplegable-menu">
              {estasEnInicio ? (
                <a
                  href="#proyectos"
                  onClick={(evento) => irASeccion(evento, "proyectos")}
                >
                  Proyectos personales
                </a>
              ) : (
                <Link to="/#proyectos">Proyectos personales</Link>
              )}

              <div className="navbar__submenu">
                {estasEnInicio ? (
                  <a
                    href="#proyectos-academicos"
                    className="navbar__submenu-boton"
                    onClick={(evento) =>
                      irASeccion(evento, "proyectos-academicos")
                    }
                  >
                    <span>Proyectos académicos</span>
                    <FaChevronRight />
                  </a>
                ) : (
                  <Link
                    to="/#proyectos-academicos"
                    className="navbar__submenu-boton"
                  >
                    <span>Proyectos académicos</span>
                    <FaChevronRight />
                  </Link>
                )}

                <div className="navbar__submenu-menu">
                  <Link to="/proyectos-academicos#java">Java</Link>
                  <Link to="/proyectos-academicos#csharp">C#</Link>
                  <Link to="/proyectos-academicos#javascript">JavaScript</Link>
                  <Link to="/proyectos-academicos#typescript">TypeScript</Link>
                  <Link to="/proyectos-academicos#python">Python</Link>
                  <Link to="/proyectos-academicos#angular">Angular</Link>
                  <Link to="/proyectos-academicos#react">React</Link>
                  <Link to="/proyectos-academicos#vue">Vue</Link>
                  <Link to="/proyectos-academicos#html-css">HTML / CSS</Link>
                  <Link to="/proyectos-academicos#php">PHP</Link>
                  <Link to="/proyectos-academicos#bases-datos">
                    Bases de datos
                  </Link>
                </div>
              </div>

              {estasEnInicio ? (
                <a
                  href="#ideas-proyectos"
                  onClick={(evento) => irASeccion(evento, "ideas-proyectos")}
                >
                  Ideas de proyectos
                </a>
              ) : (
                <Link to="/#ideas-proyectos">Ideas de proyectos</Link>
              )}
            </div>
          </div>

          {estasEnInicio ? (
            <a
              href="#contacto"
              onClick={(evento) => irASeccion(evento, "contacto")}
            >
              Contacto
            </a>
          ) : (
            <Link to="/#contacto">Contacto</Link>
          )}
        </div>

        <button
          className="boton-tema"
          onClick={cambiarTema}
          aria-label="Cambiar tema"
        >
          {temaOscuro ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
