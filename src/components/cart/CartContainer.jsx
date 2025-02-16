import React from "react";
import "../cart/CartContainer.css";
import { CartContext } from "../../context/CartContext";
import CartItemList from "../cart/CartItemList";
import CartTotal from "../cart/CartTotal";
import { useContext } from "react";
import { useEffect, useRef } from "react";

const CartSidebar = () => {
  // Usamos el useRef para el contenedor del carrito
  const { carrito, total, isCartOpen, setIsCartOpen } = useContext(CartContext); // Accedemos al carrito desde el contexto
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isCartOpen &&
        cartRef.current &&
        !cartRef.current.contains(e.target)
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen, setIsCartOpen]);

  return (
    <div
      className={`cart-sidebar ${isCartOpen ? "open" : "closed"}`}
      ref={cartRef} // Referencia al contenedor del carrito
      onClick={(e) => e.stopPropagation()}
    >
      {" "}
      <div className="cart-sidebar-content">
        <div className="h2-icon-close">
          <h2 className="h2-cart-slidebar">Tu carrito</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 icon-close"
            onClick={() => setIsCartOpen(false)} // Esta es la línea importante
            style={{ cursor: "pointer" }} // Para que muestre la manito al pasar el mouse
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <CartItemList carrito={carrito} />
        <CartTotal total={total} carrito={carrito} />
      </div>
    </div>
  );
};

export default CartSidebar;
