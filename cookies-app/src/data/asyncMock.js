// Importar las imagenes

import fotoCard from "../assets/images/cookie-card.jpg";
import fotoCardDos from "../assets/images/cookie-cardDos.jpg";
import fotoCardTres from "../assets/images/cookie-cardTres.jpg";
import fotoCardCuatro from "../assets/images/cookie-cardCuatro.jpg";
import fotoCardSiete from "../assets/images/cookie-cardSiete.jpg";


// Crear el array de productos

export const productos = [
    { id: 1, title: "Cookie MYM", price: 29.99, image: fotoCard },
    { id: 2, title: "Cookie Lemon Pie", price: 29.99, image: fotoCardDos },
    { id: 3, title: "Cookie Mega Chocolate", price: 29.99, image: fotoCardTres },
    { id: 4, title: "Cookie Kinder", price: 29.99, image: fotoCardCuatro },
    { id: 5, title: "Cookie Mega Oreo", price: 29.99, image: fotoCardSiete },
  ];


// Simular una Api con un leve retraso

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos);
        },1000);
    })
}