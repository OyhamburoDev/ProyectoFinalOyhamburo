import React, { useState } from "react";
import "../footer/footer.css";
import fotoIconoInstagram from "/images/icono-instagram.png";
import fotoIconoMeta from "/images/icono-meta.png";
import fotoIconoLinkedin from "/images/icono-linkedin.png";
import fotoIconoMasterCard from "/images/icono-masterCard.png";
import fotoIconoMercadoPago from "/images/icono-mercadoPago.png";
import fotoIconoVisa from "/images/icono-visa.png";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
  const handleGoHome = () => {
    window.scrollTo(0, 0);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.value);
  };

  const manejadorFormulario = async (event) => {
    event.preventDefault();
    if (!email) {
      setError("Por favor ingresa un correo");
      return;
    } else if (!isChecked) {
      setError("Por favor acepta los terminos y condiciones");
      return;
    }
    try {
      await addDoc(collection(db, "suscriptores"), {
        email: email,
        fecha: new Date(),
      });
      setMensajeExito("Gracias por suscribirte");
      setError("");
      setEmail("");
    } catch (error) {
      setError(
        "Hubo un problema al procesar tu suscripción. Intenta nuevamente"
      );
    }
  };

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
            <form onSubmit={manejadorFormulario}>
              <input
                type="email"
                id="intro-email"
                placeholder="Ingresa tu correo electrónico aquí →"
                className="input-footer-uno"
                onChange={handleEmailChange}
              />
              <div className="footer-checkbox-label">
                <input
                  type="checkbox"
                  id="accept-cookies"
                  onChange={handleCheckbox}
                />
                <label htmlFor="accept-cookies">
                  He leído y acepto la{" "}
                  <a href="/politica-de-privacidad">política de privacidad</a>{" "}
                  de cookies.com
                </label>
              </div>
              {mensajeExito && (
                <p className="success-message">{mensajeExito}</p>
              )}
              {error && <p className="error-message">{error}</p>}
              <button className="btn-footer">suscribirse</button>
            </form>
          </div>
        </div>
        {/* DIV NúMERO DOS */}
        <div className="footer-container-dos">
          <h3>Menú</h3>
          <div className="footer-container-navbar">
            <ul className="footer-navbar">
              <li>
                <Link to="/categoria/1">Premium</Link>
              </li>
              <li>
                <Link to="/categoria/2">Popular</Link>
              </li>
              <li>
                <Link to="/categoria/3">Classic</Link>
              </li>
              <li>
                <Link to="/categoria/1">Rellenas</Link>
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
                <Link to="/categoria/1">Cookies Premium</Link>
              </li>
              <li>
                <Link to="/categoria/2">Cookies Popular</Link>
              </li>
              <li>
                <Link to="/categoria/3">Cookies Classic</Link>
              </li>
              <li>
                <Link to="/categoria/1">Cookies Rellenas</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* ICONOS */}
      <div className="footer-iconos">
        <div className="footer-cnt-bank-socialmedia">
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
        </div>
        <div className="footer-btn-container">
          <Link to="/" onClick={handleGoHome}>
            <button className="button-footer">Volver al inicio</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
