import React, { useEffect, useState } from "react";
import { getProductosFromFirestore } from "../../services/firebase.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductosFromFirestore()
      .then((respuesta) => {
        const categoriaEncontrada = id
          ? respuesta.filter((prod) => prod.categoria === Number(id))
          : respuesta;
        setProductos(categoriaEncontrada);
      })
      .catch((error) => {
        console.log("Error al cargar productos", error);
      });
  }, [id]);

  return (
    <div className="cnt-item-list">
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <Box
          className="p-loading"
          sx={{
            position: "fixed",
            width: "100%",
            height: "100dvh",
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Fondo semitransparente
            zIndex: 2000, // Mayor que el navbar (1000)
          }}
        >
          <CircularProgress size="6rem" color="inherit" />
        </Box>
      )}
    </div>
  );
};

export default ItemListContainer;
