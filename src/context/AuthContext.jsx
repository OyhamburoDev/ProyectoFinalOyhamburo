import { createContext, useState, useEffect } from "react";
import { auth, db } from "../services/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioGuardado, setUsuarioGuardado] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const uid = authUser.uid;

        const userDoc = await getDoc(doc(db, "users", uid));

        if (userDoc) {
          setUsuarioGuardado(userDoc.data());
        } else {
          setUsuarioGuardado(null);
        }
      } else {
        setUsuarioGuardado(null);
      }
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
    <AuthContext.Provider value={{ usuarioGuardado, setUsuarioGuardado }}>
      {children}
    </AuthContext.Provider>
  );
};
