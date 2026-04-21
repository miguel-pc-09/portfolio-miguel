import Hero from "../components/Hero";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";
import ProximosProyectos from "../components/ProximosProyectos";
import Contacto from "../components/Contacto";
import ProyectosAcademicos from "../components/ProyectosAcademicos";

function Inicio() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Proyectos />
      <ProyectosAcademicos />
      <ProximosProyectos />
      <Contacto />
    </>
  );
}

export default Inicio;
