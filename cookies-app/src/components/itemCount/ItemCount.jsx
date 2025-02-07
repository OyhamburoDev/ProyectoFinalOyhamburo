import React, { useContext, useState } from "react";
import "./ItemCount.css";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ detalles }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1); // Mover cantidad a estado local

  const handleAgregar = () => {
    agregarAlCarrito(detalles, cantidad);
    setCantidad(1);
  };

  const operacionResta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const operacionSuma = () => {
    if (cantidad < detalles.stock) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <>
      <div className="item-cnt">
        <button className="count-btn" onClick={operacionResta}>
          -
        </button>
        <span className="count-num">{cantidad}</span>
        <button className="count-btn" onClick={operacionSuma}>
          +
        </button>
        <button
          className="add-to-cart-btn"
          onClick={handleAgregar}
          disabled={detalles.stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
