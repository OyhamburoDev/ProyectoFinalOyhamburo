import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarruselCategorias from "../../carruselCategorias/CarruselCategorias.jsx";
import NuestraHistoria from "../../nuestraHistoria/NuestraHistoria.jsx";
import BannerPromocional from "../../bannerPromocional/BannerPromocional.jsx";
import BannerHome from "../../bannerHome/BannerHome.jsx";

function Home() {
  return (
    <main className="main-home">
      <BannerHome />
      <CarruselCategorias />
      <BannerPromocional />
      <NuestraHistoria />
    </main>
  );
}

export default Home;
