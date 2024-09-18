// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAsUHTCufM6RsNUhwsaendql-rsME24IIY",
  authDomain: "tp3-web-react-f1899.firebaseapp.com",
  projectId: "tp3-web-react-f1899",
  storageBucket: "tp3-web-react-f1899.appspot.com",
  messagingSenderId: "587263683934",
  appId: "1:587263683934:web:d3262171a2c53c6461f3cf",
  measurementId: "G-CMZPEH6BQ3"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporte as funções necessárias para os componentes
export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc };