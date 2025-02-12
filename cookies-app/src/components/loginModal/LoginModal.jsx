import React, { useState, useContext } from "react";
import "./LoginModal.css";
import { registerUser, loginUser } from "../../services/firebase.js";

const LoginModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Aquí va la lógica para hacer login
    try {
      const user = await loginUser(email, password);

      if (user) {
        console.log("Login with", email, password);
        onClose();
      } else {
        console.log("Error en el login, usuario no válido");
      }
    } catch (error) {
      console.log("no se puede acceder");
    }
  };

  const handleRegister = async () => {
    // Aquí va la lógica para registrar un nuevo usuario
    try {
      await registerUser(email, password);
      console.log("Register with", email, password);
      onClose();
    } catch (error) {
      console.log("error al registrar", error.message);
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
