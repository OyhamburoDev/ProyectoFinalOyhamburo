import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getElegirUnProducto } from "../../firebase.js";
import "./ItemDetailContainer.css";

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
          <p>Cargando detalles del producto...</p>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
