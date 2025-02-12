import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getElegirUnProducto } from "../../services/firebase.js";
import "./ItemDetailContainer.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemDetailContainer = () => {
  const [detalles, setDetalles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const idNumerito = id;
    getElegirUnProducto(idNumerito)
      .then((res) => {
        setDetalles(res);
      })
      .catch((err) => {
        console.log("Error al elegir un producto", err);
      });
  }, [id]);

  return (
    <>
      <div className="cnt-item-detail-container">
        {detalles ? (
          <ItemDetail detalles={detalles} />
        ) : (
          <Box className="p-loading">
            <CircularProgress size="6rem" color="inherit" />
          </Box>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
