// Importación de estilos CSS específicos para el componente Home
import "./home.css";

import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import BannerHome from "./BannerHome.jsx";
import CarruselCategorias from "../../carruselCategorias/CarruselCategorias.jsx";
import NuestraHistoria from "../../nuestraHistoria/NuestraHistoria.jsx";
import BannerPromocional from "../../bannerPromocional/BannerPromocional.jsx";
import BannerHome from "../../bannerHome/BannerHome.jsx";

// Componente principal Home
function Home() {
  return (
    <main
      style={{
        backgroundColor: "#ffff", // Estilo en línea para el fondo del componente
        height: "143rem", // Altura del componente
      }}
    >
      <BannerHome />
      <CarruselCategorias />

      <BannerPromocional />
      <NuestraHistoria />
    </main>
  );
}

export default Home;
