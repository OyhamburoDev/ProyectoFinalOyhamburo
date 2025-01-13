import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import "./index.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductDetail from "./components/productoDetail/ProductoDetail.jsx"; // Asegúrate de tener este archivo

function App() {
  const [cartItems, setCartItems] = useState([]); // El estado del carrito

  // Función que incrementa el contador del carrito
  const addToCart = (producto) => {
    setCartItems((prevCart) => [...prevCart, producto]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail addToCart={addToCart} cartItems={cartItems} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
