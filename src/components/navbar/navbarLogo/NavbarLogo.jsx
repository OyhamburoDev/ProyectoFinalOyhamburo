import React from "react";
import "./navbarLogo.css";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div className="navbar-logo">
      <Link to="/" className="navbar-title">
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
