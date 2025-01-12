import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "../drawer/drawer.css";

export default function AnchorTemporaryDrawer({ state, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: 275 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="drawer-title-icon">
        <h3 className="drawe-title">Mi compra</h3>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 drawer-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      {/* <Divider /> */}
      {/* Icono del carrito + el texto */}
      <div className="container-icon-p">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 icon-cart"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>

        <h4>Tu carrito está vació</h4>
        <p>Te ayudamos a encontrar lo que buscas</p>
      </div>
      <div className="drawe-ctn-btn">
        <button>Cookies Premium</button>
        <button>Cookies Populares</button>
        <button>Cookies Clasicas</button>
        <button>Cookies Rellenas</button>
      </div>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
