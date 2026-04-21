import { Link } from "react-router-dom";
import "../styles/demo-app-viajes.css";

function DemoAppViajes() {
  const destinos = [
    {
      id: 1,
      titulo: "Pueblo con museos",
      descripcion: "Plan cultural + gastronomía. Perfecto para un día nublado.",
      etiqueta: "🌧️ Ideal con lluvia",
      imagen:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      titulo: "Ruta panorámica",
      descripcion: "Miradores y paseo fácil. Recomendado para 1 día.",
      etiqueta: "☀️ Con sol",
      imagen:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      titulo: "Campos en flor",
      descripcion: "Cuando llega su época, este lugar tiene magia.",
      etiqueta: "🌿 Temporada especial",
      imagen:
        "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      titulo: "Comer bien",
      descripcion: "Lista de restaurantes + platos típicos para descubrir.",
      etiqueta: "🍽️ Gastronomía",
      imagen:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      titulo: "Ruta de museos",
      descripcion: "Ideal en otoño/invierno o cuando no apetece exterior.",
      etiqueta: "🏛️ Cultura",
      imagen:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="tres-rumbos">
      <div className="tr-contenedor tr-volver">
        <Link to="/proyectos/idea-app-viajes" className="tr-volver__enlace">
          ← Volver al proyecto
        </Link>
      </div>

      <header className="tr-header">
        <div className="tr-contenedor tr-header__superior">
          <div className="tr-marca">
            <div className="tr-logo">TR</div>

            <div className="tr-marca__texto">
              <h1>Tres Rumbos</h1>
              <p>Viaja según el tiempo</p>
            </div>
          </div>

          <div className="tr-header__acciones">
            <button className="tr-boton tr-boton--transparente">Login</button>
            <button className="tr-boton tr-boton--verde">Registro</button>
          </div>
        </div>

        <div className="tr-contenedor">
          <nav className="tr-nav">
            <a href="#!">Inicio</a>
            <a href="#!">Lugares de interés</a>
            <a href="#!">¿Qué hacer en Tres Rumbos?</a>
            <a href="#!">Fotografías</a>
            <a href="#!">Blog</a>
            <a href="#!">Quiénes somos</a>
            <a href="#!">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="tr-contenedor tr-hero">
        <div className="tr-hero__fondo">
          <div className="tr-hero__contenido">
            <div className="tr-hero__izquierda">
              <h2>Recomendaciones según el tiempo de hoy</h2>

              <p>
                Entra, mira el clima y descubre planes y destinos. No importa la
                zona, Tres Rumbos te sugiere ideas adaptadas a la época del año.
              </p>

              <div className="tr-hero__etiquetas">
                <span>☀️ Con sol: rutas y miradores</span>
                <span>🌧️ Con lluvia: museos y gastronomía</span>
                <span>❄️ Con frío: pueblos con encanto</span>
              </div>
            </div>

            <aside className="tr-tiempo">
              <div className="tr-tiempo__cabecera">
                <strong>Tiempo ahora</strong>
                <span>Demo</span>
              </div>

              <div className="tr-tiempo__contenido">
                <div className="tr-tiempo__grados">18º</div>

                <div className="tr-tiempo__info">
                  <strong>Nublado</strong>
                  <span>Quer (Guadalajara)</span>
                </div>
              </div>

              <div className="tr-tiempo__sugerencia">
                💡 Hoy te recomendamos: cultura + comida
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="tr-contenedor tr-buscador">
        <div className="tr-campo">
          <label>Distancia máxima (km)</label>
          <input type="text" placeholder="Ej: 60" />
        </div>

        <div className="tr-campo">
          <label>Tipo de plan</label>
          <select>
            <option>Senderismo</option>
            <option>Cultura</option>
            <option>Gastronomía</option>
            <option>Escapada tranquila</option>
          </select>
        </div>

        <div className="tr-campo">
          <label>Duración</label>
          <select>
            <option>1 día</option>
            <option>Fin de semana</option>
            <option>Más días</option>
          </select>
        </div>

        <div className="tr-campo">
          <label>Época (opcional)</label>
          <select>
            <option>Me da igual</option>
            <option>Primavera</option>
            <option>Verano</option>
            <option>Otoño</option>
            <option>Invierno</option>
          </select>
        </div>

        <button className="tr-boton tr-boton--buscar">Buscar</button>
      </section>

      <section className="tr-contenedor tr-destinos">
        <div className="tr-destinos__cabecera">
          <h3>Destinos recomendados de hoy</h3>
        </div>

        <div className="tr-destinos__grid">
          {destinos.map((destino) => (
            <article key={destino.id} className="tr-tarjeta">
              <div className="tr-tarjeta__imagen">
                <img src={destino.imagen} alt={destino.titulo} />
              </div>

              <div className="tr-tarjeta__contenido">
                <span className="tr-tarjeta__etiqueta">{destino.etiqueta}</span>
                <h4>{destino.titulo}</h4>
                <p>{destino.descripcion}</p>

                <button className="tr-tarjeta__boton">Ver destino</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="tr-contenedor tr-footer">
        <p>© Tres Rumbos — Prototipo UI</p>
      </footer>
    </main>
  );
}

export default DemoAppViajes;
