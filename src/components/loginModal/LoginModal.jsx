import React, { useContext, useState } from "react";
import "./LoginModal.css";
import { registerUser, loginUser } from "../../services/firebase.js";
import { AuthContext } from "../../context/AuthContext.jsx";

const LoginModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(false); // Estado para alternar entre login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsuarioGuardado } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const isMobile = /iPhone|iPad|ipod|Android/i.test(navigator.userAgent);

  const handleLogin = async () => {
    try {
      const authUser = await loginUser(email, password);
      const uid = authUser.id;
      const firestoreUser = await getUserFromFirestore(uid);
      setUsuarioGuardado(firestoreUser);
    } catch (error) {
      console.error("Error en login:", error.message);
    }
  };

  const handleRegister = async () => {
    setError("");

    if (!name) {
      setError("Por favor ingresa tu nombre");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Ingresa un correo electronico válido");
      return;
    }
    if (password.length < 6) {
      return setError("La contraseña debe tener al menos 6 caracteres");
    }
    try {
      await registerUser(email, password, name);
      onClose();
    } catch (error) {
      setError(error.message || "Error al registrar usuario");
    }
  };

  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      onClick={onClose} // Cierra el modal si se hace clic fuera
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Cruz de cierre */}
        <span className="close-btn-modal" onClick={onClose}>
          &times;
        </span>
        <h2 className="h2-modal">{isLogin ? "Login" : "Register"}</h2>
        {!isLogin ? (
          <input
            type="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-modal"
          />
        ) : (
          <></>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-modal"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-modal"
        />

        {isLogin ? (
          <>
            <button className="button-modal" onClick={handleLogin}>
              Log In
            </button>
            <p className="p-modal">
              No tienes cuenta?{" "}
              <span
                onClick={() => setIsLogin(false)}
                style={{ color: "blue", cursor: "pointer" }}
                className="span-modal"
              >
                Registrate
              </span>
            </p>
          </>
        ) : (
          <>
            {error && <p className="error-message">{error}</p>}
            <button className="button-modal" onClick={handleRegister}>
              Sign Up
            </button>
            <p className="p-modal">
              Ya tienes cuenta?{" "}
              <span
                onClick={() => setIsLogin(true)}
                style={{ color: "blue", cursor: "pointer" }}
                className="span-modal"
              >
                Iniciar sesión
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
