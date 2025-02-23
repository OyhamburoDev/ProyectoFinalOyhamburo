// HamburgerMenu.jsx
import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleGoHome = () => {
    window.scrollTo(0, 0); // Desplazar al inicio de la página
  };

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/categoria/1", label: "Premium" },
    { to: "/categoria/2", label: "Populares" },
    { to: "/categoria/3", label: "Clásicas" },
  ];

  return (
    <>
      <HamburgerIcon onClick={handleClick} />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.to}
            component={Link}
            to={item.to}
            onClick={() => {
              handleClose();
              handleGoHome();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HamburgerMenu;
