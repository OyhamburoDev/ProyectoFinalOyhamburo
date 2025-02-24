import React from "react";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <>
      <div className="contenedorProductos">
        {productos.map((e) => (
          <Item key={e.id} id={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
