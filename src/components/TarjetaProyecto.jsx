import { Link } from "react-router-dom";

function TarjetaProyecto({
  titulo,
  descripcion,
  tecnologias,
  estado,
  slug,
  imagen,
  demo,
}) {
  return (
    <article className="tarjeta-proyecto">
      {imagen && (
        <div className="tarjeta-proyecto__imagen">
          <img src={imagen} alt={titulo} />
        </div>
      )}

      <div className="tarjeta-proyecto__cabecera">
        <h3>{titulo}</h3>
        <span className="tarjeta-proyecto__estado">{estado}</span>
      </div>

      <p>{descripcion}</p>

      <div className="tarjeta-proyecto__tecnologias">
        {tecnologias.map((tecnologia, indice) => (
          <span key={indice}>{tecnologia}</span>
        ))}
      </div>

      {demo ? (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="tarjeta-proyecto__enlace"
        >
          Ver más
        </a>
      ) : (
        <Link to={`/proyectos/${slug}`} className="tarjeta-proyecto__enlace">
          Ver más
        </Link>
      )}
    </article>
  );
}

export default TarjetaProyecto;
