import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify"; // 👈 Importamos toast

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  const handleEliminar = () => {
    eliminarProducto(item);
    toast.error(`${item.title} eliminado del carrito`, {
      className: "toast-custom",
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      style: {
        backgroundColor: "#F8D7DA", // Rojo suave
        color: "#721C24", // Rojo oscuro para el texto
        fontWeight: "bold",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      },
      progressStyle: {
        backgroundColor: "#C82333", // Rojo más fuerte para la barra de progreso
      },
    });
  };

  return (
    <div className="cart-item">
      {" "}
      {/*div principal */}
      <div className="img-car-item-cnt">
        {" "}
        {/*div imagen */}
        <img src={item.image} alt={item.title} className="cart-img" />
      </div>
      {/*div titulo */}
      <div className="title-car-item-cnt">
        <p className="title-cart-item">{item.title}</p>
      </div>
      {/*div precio y cantidad*/}
      <div className="price-car-item-cnt">
        <p className="price-cart-item">
          {" "}
          {/*precio y cantidad */}${item.price} x {cantidad}
        </p>
      </div>
      <div className="ctn-trash-price">
        {" "}
        {/*div icono basura */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          color="black"
          className="size-6 icon-trash"
          onClick={handleEliminar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
