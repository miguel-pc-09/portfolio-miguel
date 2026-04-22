import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/demo-app-cargadores.css";

const iconoMarcador = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const puntosMapa = [
  {
    id: 1,
    nombre: "Punto Gran Vía",
    zona: "Madrid centro",
    direccion: "Gran Vía, 32",
    posicion: [40.4202, -3.7058],
  },
  {
    id: 2,
    nombre: "Punto Retiro",
    zona: "Madrid",
    direccion: "Av. Menéndez Pelayo, 5",
    posicion: [40.4183, -3.6762],
  },
  {
    id: 3,
    nombre: "Punto Plaza Castilla",
    zona: "Madrid norte",
    direccion: "Paseo de la Castellana, 189",
    posicion: [40.4667, -3.6892],
  },
  {
    id: 4,
    nombre: "Punto Diagonal",
    zona: "Barcelona",
    direccion: "Av. Diagonal, 211",
    posicion: [41.4086, 2.1914],
  },
  {
    id: 5,
    nombre: "Punto Sants",
    zona: "Barcelona",
    direccion: "Carrer de Tarragona, 140",
    posicion: [41.3791, 2.1404],
  },
  {
    id: 6,
    nombre: "Punto La Garena",
    zona: "Alcalá de Henares",
    direccion: "Av. Juan Carlos I, 13",
    posicion: [40.4898, -3.3921],
  },
];

function DemoAppCargadores() {
  const [cargadores, setCargadores] = useState([
    {
      id: 1,
      nombre: "Punto Gran Vía",
      zona: "Madrid centro",
      direccion: "Gran Vía, 32",
      empresa: "Ayuntamiento",
      enchufes: [
        { id: 1, numero: "Toma 1", estado: "libre" },
        { id: 2, numero: "Toma 2", estado: "ocupado" },
      ],
    },
    {
      id: 2,
      nombre: "Punto Retiro",
      zona: "Madrid",
      direccion: "Av. Menéndez Pelayo, 5",
      empresa: "Comunidad de Madrid",
      enchufes: [
        { id: 1, numero: "Toma 1", estado: "ocupado" },
        { id: 2, numero: "Toma 2", estado: "reservado" },
      ],
    },
    {
      id: 3,
      nombre: "Punto Plaza Castilla",
      zona: "Madrid norte",
      direccion: "Paseo de la Castellana, 189",
      empresa: "EcoRed",
      enchufes: [
        { id: 1, numero: "Toma 1", estado: "libre" },
        { id: 2, numero: "Toma 2", estado: "libre" },
      ],
    },
    {
      id: 4,
      nombre: "Punto Diagonal",
      zona: "Barcelona",
      direccion: "Av. Diagonal, 211",
      empresa: "EcoCharge",
      enchufes: [
        { id: 1, numero: "Toma 1", estado: "ocupado" },
        { id: 2, numero: "Toma 2", estado: "libre" },
      ],
    },
    {
      id: 5,
      nombre: "Punto Sants",
      zona: "Barcelona",
      direccion: "Carrer de Tarragona, 140",
      empresa: "Red Urbana",
      enchufes: [
        { id: 1, numero: "Toma 1", estado: "libre" },
        { id: 2, numero: "Toma 2", estado: "reservado" },
      ],
    },
    {
      id: 6,
      nombre: "Punto La Garena",
      zona: "Alcalá de Henares",
      direccion: "Av. Juan Carlos I, 13",
      empresa: "Ayuntamiento",
      enchufes: [
        { id: 1, numero: "Toma 1", estado: "ocupado" },
        { id: 2, numero: "Toma 2", estado: "libre" },
      ],
    },
  ]);

  function cambiarEstadoEnchufe(idCargador, idEnchufe) {
    setCargadores((prev) =>
      prev.map((cargador) => {
        if (cargador.id !== idCargador) {
          return cargador;
        }

        return {
          ...cargador,
          enchufes: cargador.enchufes.map((enchufe) => {
            if (enchufe.id !== idEnchufe) {
              return enchufe;
            }

            if (enchufe.estado === "libre") {
              return { ...enchufe, estado: "ocupado" };
            }

            if (enchufe.estado === "ocupado") {
              return { ...enchufe, estado: "libre" };
            }

            return enchufe;
          }),
        };
      }),
    );
  }

  function reservarEnchufe(idCargador, idEnchufe) {
    setCargadores((prev) =>
      prev.map((cargador) => {
        if (cargador.id !== idCargador) {
          return cargador;
        }

        return {
          ...cargador,
          enchufes: cargador.enchufes.map((enchufe) => {
            if (enchufe.id !== idEnchufe) {
              return enchufe;
            }

            if (enchufe.estado === "libre") {
              return { ...enchufe, estado: "reservado" };
            }

            if (enchufe.estado === "reservado") {
              return { ...enchufe, estado: "libre" };
            }

            return enchufe;
          }),
        };
      }),
    );
  }

  const totalPuntos = cargadores.length;
  const totalUsuarios = 61084;
  const totalCargando = cargadores.reduce((total, cargador) => {
    return (
      total +
      cargador.enchufes.filter((enchufe) => enchufe.estado === "ocupado").length
    );
  }, 0);

  return (
    <main className="eco-carga">
      <section className="ec-hero">
        <div className="ec-hero__filtro"></div>

        <div className="ec-hero__contenido">
          <div className="ec-logo-demo">
            <img
              src="/imagenes/logo-ecocarga.png"
              alt="Logo EcoCarga"
              className="ec-logo-demo__imagen"
            />
          </div>
        </div>
      </section>

      <section className="ec-contenedor">
        <div className="ec-volver">
          <Link
            to="/proyectos/idea-app-cargadores"
            className="ec-volver__enlace"
          >
            ← Volver al proyecto
          </Link>
        </div>

        <div className="ec-barra-superior">
          <div className="ec-buscador">
            <input
              type="text"
              placeholder="Buscar zona o calle..."
              className="ec-buscador__input"
            />
            <button className="ec-boton ec-boton--principal">Buscar</button>
          </div>

          <div className="ec-acceso">
            <button className="ec-boton ec-boton--secundario">Login</button>
            <button className="ec-boton ec-boton--principal">Registro</button>
          </div>
        </div>

        <div className="ec-estadisticas">
          <article className="ec-stat">
            <div className="ec-stat__icono">🔌</div>
            <div className="ec-stat__texto">
              <span>Puntos registrados</span>
              <strong>{totalPuntos}</strong>
            </div>
          </article>

          <article className="ec-stat">
            <div className="ec-stat__icono">⚡</div>
            <div className="ec-stat__texto">
              <span>Ahora cargando</span>
              <strong>{totalCargando}</strong>
            </div>
          </article>

          <article className="ec-stat">
            <div className="ec-stat__icono">👤</div>
            <div className="ec-stat__texto">
              <span>Usuarios en la app</span>
              <strong>{totalUsuarios.toLocaleString("es-ES")}</strong>
            </div>
          </article>
        </div>

        <div className="ec-mapa">
          <iframe
            title="Mapa de cargadores en Madrid"
            src="https://www.google.com/maps?q=Madrid,España&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="ec-acciones">
          <button className="ec-boton ec-boton--principal">
            Localizar ahora
          </button>
          <button className="ec-boton ec-boton--secundario">
            Añadir punto de carga
          </button>
        </div>

        <div className="ec-listado-titulo">
          <h2>Puntos de carga</h2>
        </div>

        <div className="ec-grid-cargadores">
          {cargadores.map((cargador) => (
            <article key={cargador.id} className="ec-tarjeta">
              <div className="ec-tarjeta__cabecera">
                <div>
                  <span className="ec-tarjeta__zona">{cargador.zona}</span>
                  <h3>{cargador.nombre}</h3>
                </div>
              </div>

              <div className="ec-tarjeta__datos">
                <p>
                  <strong>Ubicación:</strong> {cargador.direccion}
                </p>
                <p>
                  <strong>Empresa:</strong> {cargador.empresa}
                </p>
              </div>

              <div className="ec-tomas">
                {cargador.enchufes.map((enchufe) => (
                  <div
                    key={enchufe.id}
                    className={`ec-toma ec-toma--${enchufe.estado}`}
                  >
                    <span>{enchufe.numero}</span>
                    <strong>
                      {enchufe.estado === "libre" && "Libre"}
                      {enchufe.estado === "ocupado" && "Cargando"}
                      {enchufe.estado === "reservado" && "Reservada"}
                    </strong>

                    <div className="ec-toma__botones">
                      <button
                        className="ec-boton ec-boton--mini ec-boton--principal"
                        onClick={() =>
                          cambiarEstadoEnchufe(cargador.id, enchufe.id)
                        }
                      >
                        {enchufe.estado === "ocupado"
                          ? "Poner libre"
                          : "Cargando"}
                      </button>

                      <button
                        className="ec-boton ec-boton--mini ec-boton--secundario"
                        onClick={() => reservarEnchufe(cargador.id, enchufe.id)}
                      >
                        {enchufe.estado === "reservado"
                          ? "Quitar reserva"
                          : "Reservar"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DemoAppCargadores;
