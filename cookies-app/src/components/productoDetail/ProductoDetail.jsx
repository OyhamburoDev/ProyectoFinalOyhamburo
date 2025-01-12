import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL

  return (
    <div>
      <h2>Detalle del producto: {id}</h2>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductDetail;
