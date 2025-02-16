import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";

const CartItemList = ({ carrito }) => {
  return (
    <div className="cart-items-list">
      {carrito.length > 0 ? (
        carrito.map((producto) => (
          <CartItem key={producto.item.id} {...producto} />
        ))
      ) : (
        <p style={{ color: "black" }}>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default CartItemList;
