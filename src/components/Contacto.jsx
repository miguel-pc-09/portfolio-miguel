import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contacto() {
  return (
    <section className="seccion contacto animar" id="contacto">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="seccion__mini">Hablemos</p>
          <h2>Contacto</h2>
        </div>

        <div className="contacto__contenido">
          <p>
            Si quieres contactar conmigo para una oportunidad laboral, prácticas
            o para ver más proyectos, puedes escribirme o visitar mis perfiles.
          </p>

          <div className="contacto__iconos">
            <a
              href="mailto:m.peruchacastello@gmail.com"
              className="contacto__icono"
              aria-label="Enviar email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/miguel-pc-09"
              target="_blank"
              rel="noreferrer"
              className="contacto__icono"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/miguel-ángel-perucha-castelló"
              target="_blank"
              rel="noreferrer"
              className="contacto__icono"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
