import React from "react";
import "./BannerPromocional.css";
import { motion } from "framer-motion";

const BannerPromocional = () => {
  return (
    <section className="banner-promo">
      <motion.div
        className="banner-contenedor"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="banner-texto">
          <h2 className="banner-titulo">Exclusivo de Temporada</h2>
          <p className="banner-descripcion">
            Descubre el sabor inigualable de nuestra colección premium. Solo por
            tiempo limitado.
          </p>
          <p className="banner-info-adicional">
            Elaboradas con los mejores ingredientes y un toque de tradición,
            nuestras cookies premium son una experiencia única para los amantes
            del buen gusto.
          </p>
          <motion.button className="banner-boton" whileHover={{ scale: 1.1 }}>
            Comprar Ahora
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerPromocional;
