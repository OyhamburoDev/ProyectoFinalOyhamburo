// Importación de componentes y recursos
import Card from "../cards/Cards.jsx";

// Importación de imágenes
import fotoCookieClassic from "../../assets/images/cookie-relleno.jpg";
import fotoCookiePromo from "../../assets/images/cookie-promo.jpg";
import fotoCookieLemon from "../../assets/images/cookie-envios.jpg";
import fotoCookieUltima from "../../assets/images/cookie-perfect.jpg";
import fotoCookieUltimaFondo from "../../assets/images/cookie-ultiFondo.jpg";

// Importación de estilos CSS específicos para el componente Home
import "../home/home.css";

// Importación de otros componentes
import CardDesc from "../cards/CardDesc.jsx";
import CardPromo from "../cards/CardPromo.jsx";
import CardClassic from "../cards/CardClassic.jsx";
import CardRelleno from "../cards/CardRelleno.jsx";
import ButtonChoose from "../buttons/ButtonChoose.jsx";

import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../carousel/Carousel.jsx";
import SegmentedButton from "../buttons/SegmentedButton.jsx";

// importacion re react-router link
import { Link } from "react-router-dom";

import { getProductos } from "../../data/asyncMock.js";

// Componente principal Home
function Home() {
  // useState para levantar las cards de Cookies Premium
  const [cardActiva, setCardActiva] = useState(null);

  const [productos, setProductos] = useState([]);

  const levantaCard = (indice) => {
    setCardActiva(indice);
  };

  useEffect(() => {
    getProductos().then((data) => setProductos(data));
  });

  return (
    <main
      style={{
        backgroundColor: "#fbf4e0", // Estilo en línea para el fondo del componente
        height: "130rem", // Altura del componente
      }}
    >
      {/* Sección de promoción */}
      <div className="container-desc-promo" id="home">
        <CardDesc
          title="20% off now"
          price="on all classic products"
          label="Ver más"
          image={fotoCookieClassic}
        />
        <CardPromo image={fotoCookiePromo} label="Nuevas rellenas" />
      </div>

      {/* Sección de cookies premium */}
      <div className="container-premium" id="premium">
        <div className="containerPremiun-title-button">
          <div>
            <h2 className="h2-main">Cookies Premium </h2>
          </div>
          <div className="container-buttonsChoose">
            <ButtonChoose label="MyM" />
            <ButtonChoose label="Lemon Pie" />
            <ButtonChoose label="Chocolate" />
            <ButtonChoose label="Kinder" />
            <ButtonChoose label="Mega Oreo" />
          </div>
        </div>
        <div className="container-cards">
          {productos.map((producto) => (
            <Link
              to={`/product/${producto.id}`}
              className="card-link"
              key={producto.id}
            >
              <Card
                className={`card-effect ${
                  cardActiva === 1 ? "card-active" : ""
                }`}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                id={producto.id}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Seccion para el carousel */}
      <Carousel />

      {/* Sección de cookies clásicas */}
      <section className="container-clasicos" id="classic">
        <div className="clasicos-title-btn">
          <h2 className="clasicos-title">Clasicas</h2>
          <SegmentedButton />

          <a href="#" className="clasicos-enlace">
            Mostrar todos
          </a>
        </div>
        <div className="container-cardsClassic">
          <div>
            <CardClassic
              image={fotoCookieUltimaFondo}
              // title="Chocolate Cookie Classic"
              // price="29.99"
            />
          </div>
          <div>
            <CardRelleno
              image={fotoCookieUltima}
              // title="Lemon Cookie Classic"
              // price="29.99"
            />
            <div className="cardRelleno-container">
              <h3>Since 1998 Cookies Classic</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis expedita
              </p>
              <div className="cardRelleno-button">
                {/* aqui va el boton */}
                <button className="clasicos-button">Ver más</button>
              </div>
            </div>
          </div>
          <div>
            <CardRelleno
              image={fotoCookieLemon}
              // title="Vanilla Cookie Classic"
              // price="29.99"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
