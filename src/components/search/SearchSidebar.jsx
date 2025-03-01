import React, { useEffect } from "react";
import "./searchSidebar.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { getProductosFromFirestore } from "../../services/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArrayCategorias = [
  { id: 1, name: "Premium" },
  { id: 2, name: "Populares" },
  { id: 3, name: "Clásicas" },
];

const SearchSidebar = () => {
  const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);
  const [pedidoDelUsuario, setPedidoDelUsuario] = useState(""); // aqui guarda la info del input
  const [estado, setEstado] = useState(false);
  const [resultadoProductos, setResultadoProductos] = useState([]); // aqui traemos los productos
  const [resultadoCategorias, setResultadoCategorias] = useState([]); // aqui traemos las categorias

  const handleChange = (e) => {
    setPedidoDelUsuario(e.target.value);
  };

  useEffect(() => {
    const filtrarCategorias = () => {
      const categorias = ArrayCategorias.filter((cat) =>
        cat.name.toLowerCase().includes(pedidoDelUsuario.toLowerCase())
      );
      setResultadoCategorias(categorias);
    };

    const filtrarProductos = async () => {
      try {
        const productos = await getProductosFromFirestore();
        const filtrarProductos = productos.filter((prod) =>
          prod.title.toLowerCase().includes(pedidoDelUsuario.toLowerCase())
        );
        setResultadoProductos(filtrarProductos);
      } catch (error) {
        console.log(error);
      }
    };

    if (pedidoDelUsuario) {
      filtrarCategorias();
      filtrarProductos();
      setEstado(true);
    } else {
      setResultadoProductos([]);
      setEstado(false);
    }
  }, [pedidoDelUsuario]);

  return (
    <>
      {/* Fondo oscuro detrás del sidebar */}
      <div
        className={`search-overlay ${isSearchOpen ? "open" : ""}`}
        onClick={() => {
          setIsSearchOpen(false);
          setEstado(false);
          setPedidoDelUsuario("");
        }}
      ></div>

      {/* Sidebar deslizante */}
      <div className={`search-sidebar ${isSearchOpen ? "open" : ""}`}>
        <div className="cnt-logo-close">
          <div className="cnt-logo">
            <h1 className="search-title">Cookies</h1>
            <h2 className="search-subtitle">
              <span className="material-symbols-outlined search-crown">
                crown
              </span>
              Premium
            </h2>
          </div>
          <div className="cnt-search-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 icon-close"
              onClick={() => {
                setIsSearchOpen(false);
                setEstado(false);
                setPedidoDelUsuario("");
              }}
              style={{ cursor: "pointer" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="cnt-search-input">
          <input
            type="text"
            placeholder="¿Que estas buscando?"
            className="search-input"
            value={pedidoDelUsuario}
            onChange={handleChange}
          />
        </div>
        {estado && resultadoCategorias.length > 0 && (
          <div className="cnt-search-results">
            {" "}
            <ul className="search-ul">
              {resultadoCategorias.map((cat, index) => (
                <li key={index} className="search-li">
                  <Link
                    to={`/categoria/${cat.id}`}
                    className="search-link"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {estado && resultadoCategorias.length === 0 && (
          <div className="cnt-search-results">
            {" "}
            <ul className="search-ul">
              {resultadoProductos.map((prod, index) => (
                <li key={index} className="search-li">
                  <Link
                    to={`/detalles/${prod.id}`}
                    className="search-link"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    {prod.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchSidebar;
