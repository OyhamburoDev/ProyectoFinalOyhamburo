import { useState, createContext } from "react";

// 1. Crear Contexto con valores iniciales
export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
  actualizarCantidad: () => {}, // Función para actualizar la cantidad
});

// 2. Proveedor del contexto (wrapper principal)
export const CarritoProvider = ({ children }) => {
  // Estados del carrito
  const [carrito, setCarrito] = useState([]); // Almacena los productos
  const [total, setTotal] = useState(0); // Total monetario
  const [cantidadTotal, setCantidadTotal] = useState(0); // Cantidad de ítems
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1); // Cantidad seleccionada

  // Función para actualizar la cantidad seleccionada
  const actualizarCantidad = (nuevaCantidad) => {
    setCantidadSeleccionada(nuevaCantidad);
  };

  // 3. Función para agregar productos al carrito
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

  // 5. Función para vaciar completamente el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
  };

  // 6. Proveemos el contexto a toda la app
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
