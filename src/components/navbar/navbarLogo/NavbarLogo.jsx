import React from "react";
import "./navbarLogo.css";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  const handleGoHome = () => {
    window.scrollTo(0, 0); // Desplazar al inicio de la página
  };

  return (
    <div className="navbar-logo">
      <Link to="/" className="navbar-title" onClick={handleGoHome}>
        <h1 className="navbar-title">Cookies</h1>
      </Link>
      <h2 className="navbar-subtitle">
        <span className="material-symbols-outlined navbar-crown">crown</span>
        Premium
      </h2>
    </div>
  );
};

export default NavbarLogo;
