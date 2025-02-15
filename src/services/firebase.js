import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cookies-app-4fc53.firebaseapp.com",
  projectId: "cookies-app-4fc53",
  storageBucket: "cookies-app-4fc53.firebasestorage.app",
  messagingSenderId: "495372197994",
  appId: "1:495372197994:web:3c62cccf5c60dc1e312a13"
};

// Initializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app);

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

// Función para obtener productos de Firestore
export const getUsers = async ()=> {
  const productsCollection = collection(db, 'users');
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

// Función para registrar un usuario en firabase Auth
export const registerUser = async (email, password, name)=>{
  try{
const userCredential = await createUserWithEmailAndPassword(auth, email, password);
console.log("Usuario registrado", userCredential.user)
console.log("lo ultimo", userCredential)

 // Asegúrate de que userCredential tiene un UID
 console.log("UID del usuario:", userCredential.user.uid);

await setDoc(doc(db, "users", userCredential.user.uid), {
  name: name,
  email: email,
  uid: userCredential.user.uid
      });

console.log("Usuario registrado con éxito");
  }catch(error){
    console.error("Error registrando el usuario", error);
    throw error; // Añade esto para propagar el error
  }
}

// Función para hacer un login
export const loginUser = async (email, password)=>{
try{
const userCredential = await signInWithEmailAndPassword(auth, email, password);
console.log("Usuario atenticado:", userCredential.user);
return userCredential.user;

}catch(error){
throw error;
}
};

// Función para traer el usuario de fireStore

export const getUserFromFirestore = async (uid) => {
  try{
const userDoc = await getDoc(doc(db, "users", uid));
if(userDoc.exists()){
  return userDoc.data();
}else {
  throw new Error ("El usuario no existe en Firestore")
}
  }catch(error){
    throw error;
  }
}