import "./navbar.css";
import NavbarLogo from "../navbarLogo/NavbarLogo.jsx";
import NavbarLinks from "../navbarLinks/NavbarLinks.jsx";
import NavbarIcons from "../navbarIcons/NavbarIcons.jsx";
import CartSidebar from "../../cartSlidebar/CartSlidebar.jsx";
import { useState } from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarIcons />
      </div>

      <CartSidebar />
    </>
  );
}

export default Navbar;
