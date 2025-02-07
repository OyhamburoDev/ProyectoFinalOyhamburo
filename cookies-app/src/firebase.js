// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore"; // Importa Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF4k8_Ndxmefc_JCdghqQPzEpZ6gdTdSQ",
  authDomain: "cookies-app-4fc53.firebaseapp.com",
  projectId: "cookies-app-4fc53",
  storageBucket: "cookies-app-4fc53.firebasestorage.app",
  messagingSenderId: "495372197994",
  appId: "1:495372197994:web:3c62cccf5c60dc1e312a13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Esta es la "db" que usarás en tus componentes


// Función para obtener productos de Firestore
export const getProductosFromFirestore = async ()=> {
  const productsCollection = collection(db, 'products');
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}


// Función para obtener un producto de Firestore
export const getElegirUnProducto = async (id)=> {
  const productsCollection = collection(db, 'products');
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })).find(producto => producto.id === id)
}



