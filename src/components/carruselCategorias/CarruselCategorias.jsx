import React from "react";
import "./CarruselCategorias.css";
import { Link } from "react-router-dom";

const CarruselCategorias = () => {
  const categorias = [
    {
      titulo: "Edición Clásicas",
      id: 1,
      subtitulo: "Toques de lujo comestibles",
      colorFondo: "#FFF8EE",
      imagen: "url('/images/cookie-card.jpg')",
    },
    {
      titulo: "Colección Polulares",
      id: 2,
      subtitulo: "Elegancia en tonos profundos",
      colorFondo: "#F3F3F3",
      imagen: "url('/images/cookie-coconut.jpg')",
    },
    {
      titulo: "Clásicas Premium",
      id: 3,
      subtitulo: "Reinvención de sabores tradicionales",
      colorFondo: "#FAFAFA",
      imagen: "url('/images/cookie-honey.jpg')",
    },
  ];

  return (
    <section className="carrusel-luxury">
      <div className="encabezado">
        <h2>Colecciones Destacadas</h2>
        <p>Descubre nuestras creaciones más celebradas</p>
        <div className="scroll-hint-mobile">← Desliza para ver más →</div>
      </div>

      <div className="contenedor-tarjetas">
        {categorias.map((categoria, index) => (
          <div
            key={index}
            className="tarjeta-categoria"
            style={{
              background: categoria.colorFondo,
              backgroundImage: categoria.imagen,
            }}
          >
            <div className="contenido-tarjeta">
              <h3 className="titulo-tarjeta">{categoria.titulo}</h3>
              <p className="parrafo-tarjeta">{categoria.subtitulo}</p>
              <Link
                to={`/categoria/${categoria.id}`}
                className="boton-vermas transicion"
              >
                Explorar
                <div className="linea-efecto"></div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarruselCategorias;
