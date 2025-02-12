import { createContext, useState, useEffect } from "react";
import { auth } from "../services/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioGuardado, setUsuarioGuardado] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuarioGuardado(user); // Guarda el usuario en el estado
    });

    return () => unsubscribe(); // Cancela la suscripción al desmontar
  }, []);

  // Función para cerrar sesión
  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      setUsuarioGuardado(null); // Borra el usuario del estado
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <AuthContext.Provider value={{ usuarioGuardado }}>
      {children}
    </AuthContext.Provider>
  );
};
