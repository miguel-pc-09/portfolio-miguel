import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonSubir from "./components/BotonSubir";
import ScrollArriba from "./components/ScrollArriba";
import Inicio from "./pages/Inicio";
import DetalleProyecto from "./pages/DetalleProyecto";
import DemoFormulario from "./pages/DemoFormulario";
import DemoAppViajes from "./pages/DemoAppViajes";
import DemoAppCargadores from "./pages/DemoAppCargadores";

function ContenidoRutas({ temaOscuro, cambiarTema }) {
  const location = useLocation();

  const esDemo =
    location.pathname === "/demo/formulario-web-interactivo" ||
    location.pathname === "/demo/app-viajes" ||
    location.pathname === "/demo/app-cargadores";

  return (
    <div className={temaOscuro ? "app tema-oscuro" : "app tema-claro"}>
      {!esDemo && (
        <div className="fondo-animado">
          <span className="orbita orbita-1"></span>
          <span className="orbita orbita-2"></span>
          <span className="orbita orbita-3"></span>

          <span className="meteoro meteoro-1"></span>
          <span className="meteoro meteoro-2"></span>
          <span className="meteoro meteoro-3"></span>
          <span className="meteoro meteoro-4"></span>
          <span className="meteoro meteoro-5"></span>
          <span className="meteoro meteoro-6"></span>
          <span className="meteoro meteoro-7"></span>
          <span className="meteoro meteoro-8"></span>
          <span className="meteoro meteoro-9"></span>
          <span className="meteoro meteoro-10"></span>
        </div>
      )}

      {!esDemo && <Navbar temaOscuro={temaOscuro} cambiarTema={cambiarTema} />}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos/:slug" element={<DetalleProyecto />} />
        <Route
          path="/demo/formulario-web-interactivo"
          element={<DemoFormulario />}
        />
        <Route path="/demo/app-viajes" element={<DemoAppViajes />} />
        <Route path="/demo/app-cargadores" element={<DemoAppCargadores />} />
      </Routes>

      {!esDemo && <BotonSubir />}
      {!esDemo && <Footer />}
    </div>
  );
}

function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  function cambiarTema() {
    setTemaOscuro(!temaOscuro);
  }

  useEffect(() => {
    const elementos = document.querySelectorAll(".animar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <ScrollArriba />
      <ContenidoRutas temaOscuro={temaOscuro} cambiarTema={cambiarTema} />
    </BrowserRouter>
  );
}

export default App;
