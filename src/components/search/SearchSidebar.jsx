import React, { useEffect } from "react";
import "./SearchSidebar.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { getProductosFromFirestore } from "../../services/firebase";
import { useState } from "react";

const SearchSidebar = () => {
  const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);
  const [producto, setProducto] = useState("");
  const [estado, setEstado] = useState(false);
  const [resultado, setResultado] = useState([]);

  const handleChange = (e) => {
    setProducto(e.target.value);
  };

  useEffect(() => {
    const filtrarProductos = async () => {
      try {
        const productos = await getProductosFromFirestore();
        const filtrarProductos = productos.filter((prod) =>
          prod.title.toLowerCase().includes(producto.toLowerCase())
        );

        setResultado(filtrarProductos);
        setEstado(true);
      } catch (error) {
        console.log(error);
        setEstado(false);
      }
    };
    if (producto) {
      filtrarProductos();
    } else {
      setResultado([]);
    }
  }, [producto]);

  return (
    <>
      {/* Fondo oscuro detrás del sidebar */}
      <div
        className={`search-overlay ${isSearchOpen ? "open" : ""}`}
        onClick={() => setIsSearchOpen(false)}
      ></div>

      {/* Sidebar deslizante */}
      <div className={`search-sidebar ${isSearchOpen ? "open" : ""}`}>
        <button onClick={() => setIsSearchOpen(false)}>Cerrar</button>

        <input
          type="text"
          placeholder="¿Que estas buscando?"
          className="search-input"
          value={producto}
          onChange={handleChange}
        />
        {estado ? (
          <ul>
            {resultado.map((prod, index) => (
              <li key={index}>{prod.title}</li>
            ))}
          </ul>
        ) : (
          <p>no está</p>
        )}
      </div>
    </>
  );
};

export default SearchSidebar;
