import React, { useContext, useEffect, useState } from "react";
import "./ItemCount.css";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ detalles }) => {
  const { agregarAlCarrito, carrito, isCartOpen, setIsCartOpen } =
    useContext(CartContext);
  const [cantidad, setCantidad] = useState(1); // Mover cantidad a estado local
  const [isInCart, setIsInCart] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const exists = carrito.some((item) => item.item.id === detalles.id);
    setIsInCart(exists);
  }, [carrito, detalles.id]);

  const handleAgregar = async () => {
    agregarAlCarrito(detalles, cantidad);
    toast.success(`${detalles.title} agregado al carrito!`, {
      className: "toast-custom",
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light", // Puedes cambiar a "dark" si combina más con tu diseño
      style: {
        backgroundColor: "#F5DEB3", // Color pastel tipo galleta 🍪
        color: "#4E342E", // Marrón oscuro para el texto
        fontWeight: "bold",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      },
      progressStyle: {
        backgroundColor: "#8B5A2B", // Un tono caramelo para la barra de progreso
      },
    });
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
        {!isInCart ? (
          <>
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
          </>
        ) : (
          <button className="add-to-cart-btn" onClick={toggleCart}>
            Ir al carrito
          </button>
        )}
      </div>
    </>
  );
};

export default ItemCount;
