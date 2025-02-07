import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";

const CartItemList = ({ carrito }) => {
  console.log("ahora si", carrito);
  console.log("Carrito:", JSON.stringify(carrito, null, 2));
  return (
    <div className="cart-items-list">
      {carrito.length > 0 ? (
        carrito.map((producto) => <CartItem key={producto.id} {...producto} />)
      ) : (
        <p style={{ color: "black" }}>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default CartItemList;
