import "./navbar.css";
import NavbarLogo from "../navbarLogo/NavbarLogo.jsx";
import NavbarLinks from "../navbarLinks/NavbarLinks.jsx";
import NavbarIcons from "../navbarIcons/NavbarIcons.jsx";
import CartSidebar from "../../cartSlidebar/CartSlidebar.jsx";
import { useState } from "react";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarIcons toggleCart={() => setIsCartOpen(!isCartOpen)} />
      </div>

      <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}

export default Navbar;
