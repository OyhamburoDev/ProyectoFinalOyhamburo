import { useState, createContext } from "react";

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
  actualizarCantidad: () => {},
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const actualizarCantidad = (nuevaCantidad) => {
    setCantidadSeleccionada(nuevaCantidad);
  };

  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      // Si el producto NO está en el carrito: lo agregamos
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + cantidad * item.price);
    } else {
      // Si el producto YA está: actualizamos la cantidad
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        }
        return prod;
      });

      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + cantidad * item.price);
    }
  };

  // 4. Función para eliminar un producto específico
  const eliminarProducto = (item) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === item.id);
    const carritoActualizado = carrito.filter(
      (prod) => prod.item.id !== item.id
    );

    // Actualizamos estados restando los valores del producto eliminado
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) => prev - productoEliminado.item.price * productoEliminado.cantidad
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        cantidadSeleccionada,
        actualizarCantidad,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
