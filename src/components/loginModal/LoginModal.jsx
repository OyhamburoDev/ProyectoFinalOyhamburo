import React, { useContext, useState } from "react";
import "./LoginModal.css";
import { registerUser, loginUser } from "../../services/firebase.js";
import { AuthContext } from "../../context/AuthContext.jsx";

const LoginModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsuarioGuardado } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const authUser = await loginUser(email, password);

      const uid = authUser.id;
      console.log("ver esto,", authUser);
      const firestoreUser = await getUserFromFirestore(uid);

      setUsuarioGuardado(firestoreUser);

      console.log("Login exitoso, Usurio de firestore: ", firestoreUser);
    } catch (error) {
      console.error("Error en login:", error.message);
    }
  };

  const handleRegister = async () => {
    // Aquí va la lógica para registrar un nuevo usuario

    if (!email) {
      setError("Por favor ingresa un correo");
      return;
    } else if (!password) {
      setError(error.message);
      return;
    }
    try {
      await registerUser(email, password, name);
      console.log("Register with", email, password);
      onClose();
    } catch (error) {
      console.log("Error al registrar:", error.message);
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
