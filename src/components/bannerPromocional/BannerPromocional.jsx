import React from "react";
import "./BannerPromocional.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BannerPromocional = () => {
  return (
    <section className="banner-promo">
      <motion.div
        className="bannerP-contenedor-motion"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bannerP-texto">
          <h2 className="bannerP-titulo">Exclusivo de Temporada</h2>
          <p className="bannerP-descripcion">
            Descubre el sabor inigualable de nuestra colección premium. Solo por
            tiempo limitado.
          </p>
          <p className="banner-info-adicional">
            Elaboradas con los mejores ingredientes y un toque de tradición,
            nuestras cookies premium son una experiencia única para los amantes
            del buen gusto.
          </p>
          <div className="cnt-bannerPromocional-btn">
            <Link to="/en-construccion" className="btn primary banner-boton">
              Comprar Ahora
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerPromocional;
