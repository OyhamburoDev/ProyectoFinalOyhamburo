import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./BannerHome.css";

const BannerHome = () => {
  return (
    <section className="banner-home">
      <div className="overlay"></div>
      <div className="banner-content">
        {/* Texto con Animación */}
        <motion.div
          className="text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Lujo en Cada Bocado</h1>
          <p>Descubre nuestra colección exclusiva de galletas premium.</p>

          {/* Botones con efecto hover */}
          <div className="buttons">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/coleccion" className="btn primary">
                Explorar
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/nosotros" className="btn secondary">
                Conócenos
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Imagen con animación */}
        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="image-frame">
            <img src="/images/cookie-cardCuatro.jpg" alt="Cookies Premium" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerHome;
