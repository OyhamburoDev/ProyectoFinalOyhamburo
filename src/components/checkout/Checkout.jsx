import "./Checkout.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { db } from "../../services/firebase.js";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CartContext);

  const manejadorFormulario = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos");
      return;
    }
    if (email !== emailConfirmacion) {
      setError("El email y su confirmación deben coincidir");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.title,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    try {
      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, "products", productoOrden.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      );

      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      vaciarCarrito();

      toast.success(
        `🎉 ¡Compra confirmada! Tu número de orden es: ${docRef.id}`,
        {
          className: "toast-confirmacion",
          position: "top-center",
          autoClose: false,
          closeOnClick: false,
          hideProgressBar: true,
          draggable: false,
          closeButton: true,
          theme: "light",
          style: {
            backgroundColor: "#F5E1C0",
            color: "#4E342E",
            fontWeight: "bold",
            fontSize: "18px",
            textAlign: "center",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
            maxWidth: "400px",
            margin: "10vh auto",
          },
        }
      );
    } catch (error) {
      console.error("❌ Error en el proceso de compra:", error);
      setError("Se produjo un error al procesar la compra");
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2 className="checkout-title">Checkout Final</h2>
        <form onSubmit={manejadorFormulario} className="form-checkout">
          <div className="form-group">
            <label className="label-checkout">Nombre</label>
            <input
              type="text"
              className="input-field"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              type="text"
              className="input-field"
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Telefono</label>
            <input
              type="text"
              className="input-field"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirmar Email</label>
            <input
              type="email"
              className="input-field"
              onChange={(e) => setEmailConfirmacion(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-checkout">
            Confirmar compra
          </button>
          {ordenId && (
            <>
              <strong className="order-thank-you">
                ¡Gracias por tu compra! Tu número de orden es: {ordenId}
              </strong>
            </>
          )}
        </form>
      </div>

      {/* Ticket de compra */}
      <div className="checkout-ticket">
        <h3 className="ticket-title">Resumen de la compra</h3>
        <div className="ticket-items">
          {carrito.map((producto) => (
            <div key={producto.item.id} className="ticket-item">
              <p className="ticket-p">
                {producto.item.title} x {producto.cantidad} - $
                {producto.cantidad * producto.item.price}
              </p>
            </div>
          ))}
        </div>
        <hr className="hr-checkout" />
        <div className="ticket-total">
          <p>
            <strong>Total: ${total}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
