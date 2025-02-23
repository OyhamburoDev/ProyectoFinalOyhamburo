import React from "react";
import "./navbarIcons.css";
import SearchIcon from "./searchIcon/SearchIcon.jsx";
import IconLike from "./likeIcon/IconLike.jsx";
import CartIcon from "./cartIcon/CartIcon.jsx";
import UserIcon from "./userIcon/UserIcon.jsx";
import HamburgerMenu from "./hamburgerIcon/HamburgerMenu.jsx";

const NavbarIcons = () => {
  return (
    <>
      <div className="navbar-icons">
        <SearchIcon />
        <IconLike />
        <CartIcon />
        <UserIcon />
        <HamburgerMenu />
      </div>
    </>
  );
};

export default NavbarIcons;
