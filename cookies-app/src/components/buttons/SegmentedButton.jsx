import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function SegmentedButton() {
  const [selected, setSelected] = useState("Calzado"); // Estado para rastrear qué botón está activo

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div
      style={{
        display: "inline-flex",
        borderRadius: "25px", // Bordes redondeados elegantes
        border: "1px solid #ccc", // Color del borde
        overflow: "hidden", // Asegura que el borde sea continuo
        backgroundColor: "#f4f4f4", // Fondo gris claro
        transition: "box-shadow 0.3s ease", // Animación de sombra suave
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra sutil
      }}
    >
      <Button
        onClick={() => handleSelect("Calzado")}
        style={{
          flex: 1,
          backgroundColor: selected === "Calzado" ? "black" : "#f4f4f4", // Activo: gris oscuro
          color: selected === "Calzado" ? "white" : "#333", // Cambiar color del texto
          borderRadius: "25px", // Bordes redondeados
          fontSize: "0.7rem",
          fontWeight: 500,
          padding: "0.1rem 0.6rem",
          transition:
            "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease", // Animación
          textTransform: "none",
        }}
      >
        Calzado
      </Button>
      <Button
        onClick={() => handleSelect("Remeras")}
        style={{
          flex: 1,
          backgroundColor: selected === "Remeras" ? "black" : "#f4f4f4", // Activo: gris oscuro
          color: selected === "Remeras" ? "white" : "#333", // Cambiar color del texto
          borderRadius: "25px", // Bordes redondeados
          fontSize: "0.7rem",
          fontWeight: 500,
          padding: "0.1rem 0.6rem",
          transition:
            "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease", // Animación
          textTransform: "none",
        }}
      >
        Remeras
      </Button>
    </div>
  );
}
