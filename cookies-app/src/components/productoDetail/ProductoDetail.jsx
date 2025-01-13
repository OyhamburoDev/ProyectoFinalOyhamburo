import { useParams } from "react-router-dom";
import { productos } from "../../data/asyncMock.js";
import "../productoDetail/productoDetail.css";
import { useState } from "react";

function ProductDetail({ addToCart, cartItems }) {
  // traigo el id con un hook
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  // comparo el id con el id de los productos.
  const producto = productos.find((prod) => prod.id === parseInt(id));

  // contador de la pagina de productoDetail
  const [cantidad, setCantidad] = useState(1);

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  // Verifica si el producto ya está en el carrito
  const isProductInCart = cartItems.some((item) => item.id === producto.id);

  const handleAddToCart = () => {
    if (!isProductInCart) {
      addToCart(producto); // Solo agrega si no está en el carrito
      alert(
        `Agregaste ${cantidad} unidad(es) de ${producto.title} al carrito.`
      );
    }
  };

  return (
    <div className="product-detail-container">
      {/* Imagen del producto */}
      <div className="product-image-section">
        <img
          src={producto.image}
          alt={producto.title}
          className="product-detail-image"
        />
      </div>

      {/* Información del producto */}
      <div className="product-info-section">
        <h1 className="product-title">{producto.title}</h1>
        <p className="product-price">${producto.price.toFixed(2)}</p>
        <p className="product-description">
          ¡Prueba nuestra deliciosa {producto.title}! Hecha con los mejores
          ingredientes para satisfacer tus antojos dulces.
        </p>
        <p className="product-installments">
          Hasta 3 cuotas sin interés de ${(producto.price / 3).toFixed(2)} cada
          una.
        </p>

        {/* Selector de cantidad */}
        <div className="quantity-section">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="20"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>

        {/* Botón de agregar al carrito */}
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(producto)}
          disabled={isProductInCart} // deshabilita el boton si el producto ya esta en el carrito
        >
          {isProductInCart ? "Ya está en el carrito" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
