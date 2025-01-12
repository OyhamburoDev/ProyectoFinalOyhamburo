import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductDetail from "./components/productoDetail/ProductoDetail.jsx"; // Asegúrate de tener este archivo

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
