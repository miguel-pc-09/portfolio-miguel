import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BotonSubir() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function detectarScroll() {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", detectarScroll);

    return () => window.removeEventListener("scroll", detectarScroll);
  }, []);

  function subirArriba() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button className="boton-subir" onClick={subirArriba}>
      <FaArrowUp />
    </button>
  );
}

export default BotonSubir;
