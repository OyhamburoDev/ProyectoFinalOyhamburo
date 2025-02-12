import React from "react";
import "./ItemDetail.css";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ detalles }) => {
  return (
    <div className="cnt-item-detail">
      <div className="cnt-img">
        <img
          className="img-item-detail"
          src={detalles.image}
          alt={detalles.title}
        />
      </div>
      <div className="cnt-title-price">
        <h2 className="title-item-detail">{detalles.title}</h2>
        <h3 className="price-item-detail">${detalles.price}</h3>
        <h3 className="stock-item-detail">Stock: {detalles.stock}</h3>
        <p className="p-item-detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          suscipit neque ac velit efficitur, vel vulputate sapien scelerisque.
        </p>
        <div className="item-count-wrapper">
          <ItemCount detalles={detalles} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
