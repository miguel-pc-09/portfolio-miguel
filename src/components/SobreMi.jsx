function SobreMi() {
  return (
    <section className="seccion sobre-mi animar" id="sobre-mi">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="seccion__mini">Quién soy</p>
          <h2>Sobre mí</h2>
        </div>

        <div className="sobre-mi__grid">
          <div className="sobre-mi__texto">
            <p>
              Soy estudiante de Desarrollo de Aplicaciones Web y desde 2025
              llevo trabajando en distintos proyectos personales y académicos
              enfocados en frontend. Me gusta crear interfaces claras, que se
              entiendan rápido y que funcionen bien en cualquier dispositivo.
            </p>

            <p>
              Aprendo principalmente haciendo proyectos reales, ya que es la
              forma que mejor me funciona para entender cómo se estructura una
              aplicación y cómo resolver problemas de verdad. He trabajado con
              tecnologías como React, JavaScript y TypeScript, además de HTML y
              CSS.
            </p>

            <p>
              Ahora mismo estoy centrado en seguir aprendiendo y ganando soltura
              con el desarrollo frontend. Me gustaría poder dar el paso al mundo
              laboral y empezar a trabajar en proyectos reales donde seguir
              creciendo como desarrollador.
            </p>
          </div>

          <div className="sobre-mi__tecnologias">
            <h3>Tecnologías</h3>

            <div className="etiquetas">
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Angular</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
