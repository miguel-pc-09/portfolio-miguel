import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollArriba() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      setTimeout(() => {
        const elemento = document.getElementById(id);

        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);

      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollArriba;
