import React from "react";
import "./NuestraHistoria.css";

const NuestraHistoria = () => {
  return (
    <section className="historia-luxury">
      <div className="contenedor-historia">
        <div className="columna-textos">
          <h2>Legado en Cada Receta</h2>
          <p className="destacado">
            Desde 1985, fusionamos tradición familiar con innovación gourmet
          </p>
          <div className="linea-separadora"></div>
          <p className="descripcion">
            Nuestro proceso artesanal combina técnicas centenarias con los
            mejores ingredientes globales, creando una experiencia sensorial
            única en cada mordisco.
          </p>
          <button className="boton-saber-mas transicion">
            Conoce Nuestra Historia
            <span className="icono-flecha">→</span>
          </button>
        </div>
        <div className="columna-imagen">
          <div className="marco-imagen"></div>
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
