import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollArriba() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Evita que el navegador restaure la posición anterior.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Si la URL lleva a una sección concreta.
    if (hash) {
      const id = hash.replace("#", "");

      const temporizador = setTimeout(() => {
        const elemento = document.getElementById(id);

        if (elemento) {
          elemento.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);

      return () => clearTimeout(temporizador);
    }

    // Al cambiar de página siempre empieza arriba directamente.
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
}

export default ScrollArriba;
