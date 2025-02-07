import React from "react";
import "./CarruselCategorias.css";

const CarruselCategorias = () => {
  const categorias = [
    {
      titulo: "Edición Oro",
      subtitulo: "Toques de lujo comestibles",
      colorFondo: "#FFF8EE",
      imagen: "url('/images/cookie-card.jpg')",
    },
    {
      titulo: "Colección Noir",
      subtitulo: "Elegancia en tonos profundos",
      colorFondo: "#F3F3F3",
      imagen: "url('/images/cookie-coconut.jpg')",
    },
    {
      titulo: "Clásicas Premium",
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
              <button className="boton-vermas transicion">
                Explorar
                <div className="linea-efecto"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarruselCategorias;
