import React from "react";
import "./CartTotal.css";
import { Link } from "react-router-dom";

const CartTotal = ({ total, carrito }) => {
  return (
    <>
      <div className="drawer-footer">
        <div className="total-container">
          <p className="p-total">Total:</p>
          <p className="p-price">$ {total.toFixed(2)}</p>
        </div>
        <Link to="/checkout">
          <button className="button-pagar" disabled={carrito.length === 0}>
            Finalizar compra
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartTotal;
