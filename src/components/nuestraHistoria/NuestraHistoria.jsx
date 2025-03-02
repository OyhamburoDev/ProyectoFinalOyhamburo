import React from "react";
import "./NuestraHistoria.css";
import { Link } from "react-router-dom";

const NuestraHistoria = () => {
  return (
    <section className="historia-luxury">
      <div className="contenedor-historia">
        <div className="columna-textos-historia">
          <h2>Legado en Cada Receta</h2>
          <p className="historia-p-destacado">
            Desde 1985, fusionamos tradición familiar con innovación gourmet
          </p>
          <div className="linea-separadora-historia"></div>
          <p className="historia-p-descripcion">
            Nuestro proceso artesanal combina técnicas centenarias con los
            mejores ingredientes globales, creando una experiencia sensorial
            única en cada mordisco.
          </p>
          <Link to="/en-construccion" className="boton-historia transicion">
            Conoce Nuestra Historia
            <span className="icono-flecha">→</span>
          </Link>
        </div>
        <div className="columna-imagen-historia">
          <div className="marco-imagen-historia"></div>
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
