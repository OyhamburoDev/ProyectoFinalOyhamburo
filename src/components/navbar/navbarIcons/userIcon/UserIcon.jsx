import React from "react";
import { AuthContext } from "../../../../context/AuthContext.jsx";
import { useState, useContext } from "react";
import MailIcon from "@mui/icons-material/Mail";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import "./userIcon.css";

const UserIcon = () => {
  const { usuarioGuardado } = useContext(AuthContext);
  const [mostrarPoper, setMostrarPoper] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMostrarPoper(false);
  };

  const open = Boolean(anchorEl) && mostrarPoper;
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {usuarioGuardado && mostrarPoper ? (
        <Badge
          badgeContent={<MailIcon fontSize="small" />}
          className="user-icon-badge"
        >
          <div className="icon-usuario">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
              onClick={handleClick}
              aria-describedby={id}
              variant="contained"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography sx={{ p: 2 }}>
                ¡Hola, {usuarioGuardado.name}! Es genial tenerte aquí. ¡Explora
                y diviértete!.
              </Typography>
            </Popover>
          </div>
        </Badge>
      ) : (
        <div className="icon-usuario">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            onClick={handleClick}
            aria-describedby={id}
            variant="contained"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default UserIcon;
