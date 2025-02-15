import React from "react";
import "./navbarLinks.css";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  const handleGoHome = () => {
    window.scrollTo(0, 0); // Desplazar al inicio de la página
  };

  return (
    <div className="navbar-links">
      <ul className="navbar-list">
        <li>
          <Link to="/" onClick={handleGoHome}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/categoria/1" onClick={handleGoHome}>
            Premium
          </Link>
        </li>
        <li>
          <Link to="/categoria/2" onClick={handleGoHome}>
            Populares
          </Link>
        </li>
        <li>
          <Link to="/categoria/3" onClick={handleGoHome}>
            Clásicas
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
