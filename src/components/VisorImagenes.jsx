import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function VisorImagenes({ imagenes = [], titulo = "Imagen del proyecto" }) {
  const [abierto, setAbierto] = useState(false);

  const [indiceActual, setIndiceActual] = useState(0);

  const imagenActual = imagenes[indiceActual];

  function abrirVisor(indice = 0) {
    setIndiceActual(indice);

    setAbierto(true);
  }

  function cerrarVisor() {
    setAbierto(false);
  }

  function mostrarAnterior() {
    setIndiceActual((indiceAnterior) =>
      indiceAnterior === 0 ? imagenes.length - 1 : indiceAnterior - 1,
    );
  }

  function mostrarSiguiente() {
    setIndiceActual((indiceAnterior) =>
      indiceAnterior === imagenes.length - 1 ? 0 : indiceAnterior + 1,
    );
  }

  useEffect(() => {
    if (!abierto) {
      return undefined;
    }

    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function manejarTeclado(evento) {
      if (evento.key === "Escape") {
        cerrarVisor();
      }

      if (evento.key === "ArrowLeft" && imagenes.length > 1) {
        mostrarAnterior();
      }

      if (evento.key === "ArrowRight" && imagenes.length > 1) {
        mostrarSiguiente();
      }
    }

    document.addEventListener("keydown", manejarTeclado);

    return () => {
      document.removeEventListener("keydown", manejarTeclado);

      document.body.style.overflow = overflowAnterior;
    };
  }, [abierto, imagenes.length]);

  if (!imagenes.length || !imagenActual) {
    return null;
  }

  const visor = abierto ? (
    <div
      className="visor-imagenes"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${titulo}`}
      onClick={cerrarVisor}
    >
      <div
        className="visor-imagenes__contenido"
        onClick={(evento) => evento.stopPropagation()}
      >
        <button
          type="button"
          className="visor-imagenes__cerrar"
          onClick={cerrarVisor}
          aria-label="Cerrar imagen"
        >
          ×
        </button>

        {imagenes.length > 1 && (
          <button
            type="button"
            className="visor-imagenes__flecha visor-imagenes__flecha--izquierda"
            onClick={mostrarAnterior}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
        )}

        <div className="visor-imagenes__marco">
          <img
            className="visor-imagenes__imagen"
            src={imagenActual}
            alt={`${titulo} ${indiceActual + 1}`}
          />
        </div>

        {imagenes.length > 1 && (
          <button
            type="button"
            className="visor-imagenes__flecha visor-imagenes__flecha--derecha"
            onClick={mostrarSiguiente}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        )}

        {imagenes.length > 1 && (
          <span className="visor-imagenes__contador">
            {indiceActual + 1} / {imagenes.length}
          </span>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className="visor-imagenes__abrir"
        onClick={() => abrirVisor(0)}
        aria-label={`Ampliar ${titulo}`}
      >
        <img src={imagenes[0]} alt={titulo} />
      </button>

      {visor && createPortal(visor, document.body)}
    </>
  );
}

export default VisorImagenes;
