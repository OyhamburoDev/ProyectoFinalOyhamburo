import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./index.css";
import Home from "./components/pages/home/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import LoginModal from "./components/loginModal/LoginModal.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <LoginModal show={showModal} onClose={closeModal} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
