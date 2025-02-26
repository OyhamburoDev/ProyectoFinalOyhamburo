import "./navbar.css";
import NavbarLogo from "../navbarLogo/NavbarLogo.jsx";
import NavbarLinks from "../navbarLinks/NavbarLinks.jsx";
import NavbarIcons from "../navbarIcons/NavbarIcons.jsx";
import CartSidebar from "../../cart/CartContainer.jsx";
import SearchSidebar from "../../search/SearchSidebar.jsx";

function Navbar({ openModal }) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <NavbarLogo />
        <NavbarLinks className="desktop-links" />
        <NavbarIcons openModal={openModal} />
      </div>
      <SearchSidebar />
      <CartSidebar />
    </div>
  );
}

export default Navbar;
