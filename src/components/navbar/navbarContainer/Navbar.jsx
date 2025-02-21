import "./navbar.css";
import NavbarLogo from "../navbarLogo/NavbarLogo.jsx";
import NavbarLinks from "../navbarLinks/NavbarLinks.jsx";
import NavbarIcons from "../navbarIcons/NavbarIcons.jsx";
import CartSidebar from "../../cart/CartContainer.jsx";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <NavbarLogo />
        <NavbarLinks className="desktop-links" />
        <NavbarIcons />
      </div>

      <div className="mobile-menu">
        <NavbarLinks className="mobile-links" />
      </div>

      <CartSidebar />
    </>
  );
}

export default Navbar;
