import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "../drawer/drawer.css";

export default function AnchorTemporaryDrawer({
  state,
  toggleDrawer,
  cartItems,
  removeFromCart,
}) {
  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="drawer-title-icon">
        <h3 className="drawe-title">Mi compra</h3>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 drawer-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      {/* <Divider /> */}
      {/* Icono del carrito + el texto */}
      {/* Condición para mostrar mensaje de carrito vacío o productos en el carrito */}
      {cartItems.length === 0 ? (
        <div className="container-icon-p">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <h4>Tu carrito está vacío</h4>
          <p>Te ayudamos a encontrar lo que buscas</p>

          {/* Botones solo cuando el carrito está vacío */}
          <div className="drawe-ctn-btn">
            <button>Cookies Premium</button>
            <button>Cookies Populares</button>
            <button>Cookies Clásicas</button>
            <button>Cookies Rellenas</button>
          </div>
        </div>
      ) : (
        <div className="container-producto-footer">
          {/* Mapeamos los productos del carrito */}
          <div className="container-producto">
            {cartItems.map((prod) => (
              <div key={prod.id} className="cnt-img-p">
                <div className="cnt-img">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="drawer-img"
                  />
                </div>
                <div className="cnt-p">
                  <p>{prod.title}</p>
                  {/* contador */}
                </div>
                <div>
                  {/* icono basura */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 icon-trash"
                    onClick={() => removeFromCart(prod.id)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>

                  <p>{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="drawer-footer">
            <div className="total-container">
              <p className="p-total">Total:</p>
              <p className="p-price">$25.00</p>
            </div>
            <button className="button-pagar">Finalizar compra</button>
          </div>
        </div>
      )}
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
