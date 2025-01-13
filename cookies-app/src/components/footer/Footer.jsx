import React from "react";
import "../footer/footer.css";
import fotoIconoInstagram from "../../assets/images/icono-instagram.png";
import fotoIconoMeta from "../../assets/images/icono-meta.png";
import fotoIconoLinkedin from "../../assets/images/icono-linkedin.png";
import fotoIconoMasterCard from "../../assets/images/icono-masterCard.png";
import fotoIconoMercadoPago from "../../assets/images/icono-mercadoPago.png";
import fotoIconoVisa from "../../assets/images/icono-visa.png";

const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        {/* DIV NúMERO UNO */}
        <div className="footer-container-uno">
          <h3 className="footer-title-uno">
            Suscríbete a nuestra tienda y sé el primero en enterarte de los
            últimos lanzamientos, ofertas y novedades de cookies.com
          </h3>

          <div className="footer-container-input">
            <input
              type="email"
              id="intro-email"
              placeholder="Ingresa tu correo electrónico aquí →"
              className="input-uno"
            />
            <div className="footer-checkbox-label">
              <input type="checkbox" id="accept-cookies" />
              <label htmlFor="accept-cookies">
                He leído y acepto la{" "}
                <a href="/politica-de-privacidad">política de privacidad</a> de
                cookies.com
              </label>
            </div>
          </div>
        </div>
        {/* DIV NúMERO DOS */}
        <div className="footer-container-dos">
          <h3>Menú</h3>
          <div className="footer-container-navbar">
            <ul className="footer-navbar">
              <li>
                <a href="#home"> Rellenas</a>
              </li>
              <li>
                <a href="#premium"> Premium</a>
              </li>
              <li>
                <a href="#popular"> Popular</a>
              </li>
              <li>
                <a href="#classic"> Classic</a>
              </li>
            </ul>
          </div>
        </div>
        {/* DIV NÚMERO TRES */}
        <div className="footer-container-tres">
          <h3>Soporte</h3>
          <div className="footer-container-navbar">
            <ul className="footer-navbar">
              <li>
                <a href="">Cookies Rellenas</a>
              </li>
              <li>
                <a href="">Cookies Premium</a>
              </li>
              <li>
                <a href="">Cookies Popular</a>
              </li>
              <li>
                <a href="">Cookies Classic</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* ICONOS */}
      <div className="footer-iconos">
        <div className="footer-icon-bank">
          <img
            src={fotoIconoMasterCard}
            alt="icono-instagram"
            className="footer-icon-uno"
          />
          <img
            src={fotoIconoMercadoPago}
            alt="icono-Meta"
            className="footer-icon-uno"
          />
          <img
            src={fotoIconoVisa}
            alt="icono-linkedin"
            className="footer-icon-uno"
          />
        </div>
        <div className="footer-container-icon">
          {" "}
          <img
            src={fotoIconoInstagram}
            alt="icono-instagram"
            className="footer-icon"
          />
          <img src={fotoIconoMeta} alt="icono-Meta" className="footer-icon" />
          <img
            src={fotoIconoLinkedin}
            alt="icono-linkedin"
            className="footer-icon"
          />
        </div>
        <div className="footer-btn-container">
          {" "}
          <button
            className="button-footer"
            onClick={() => {
              const navbar = document.getElementById("navBar");
              navbar?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
