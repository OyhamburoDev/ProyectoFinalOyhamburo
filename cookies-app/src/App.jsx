import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/pages/home/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
