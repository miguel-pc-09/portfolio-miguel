import logo from "../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar({ temaOscuro, cambiarTema }) {
  const location = useLocation();
  const estasEnInicio = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar__contenido">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Logo MAPC" />
        </Link>

        <div className="navbar__enlaces">
          {estasEnInicio ? (
            <>
              <a href="#inicio">Inicio</a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
            </>
          ) : (
            <>
              <Link to="/">Inicio</Link>
              <Link to="/#sobre-mi">Sobre mí</Link>
              <Link to="/#proyectos">Proyectos</Link>
              <Link to="/#contacto">Contacto</Link>
            </>
          )}
        </div>

        <button className="boton-tema" onClick={cambiarTema}>
          {temaOscuro ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
