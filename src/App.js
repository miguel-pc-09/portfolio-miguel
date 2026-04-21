import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonSubir from "./components/BotonSubir";
import ScrollArriba from "./components/ScrollArriba";
import Inicio from "./pages/Inicio";
import DetalleProyecto from "./pages/DetalleProyecto";
import DemoFormulario from "./pages/DemoFormulario";

function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  function cambiarTema() {
    setTemaOscuro(!temaOscuro);
  }

  return (
    <BrowserRouter>
      <ScrollArriba />

      <div className={temaOscuro ? "app tema-oscuro" : "app tema-claro"}>
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

        <Navbar temaOscuro={temaOscuro} cambiarTema={cambiarTema} />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos/:slug" element={<DetalleProyecto />} />
          <Route
            path="/demo/formulario-web-interactivo"
            element={<DemoFormulario />}
          />
        </Routes>

        <BotonSubir />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
