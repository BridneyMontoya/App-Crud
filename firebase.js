
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import {getFirestore, collection, getDoc} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtWhmGPC3201PsN7EJx7GfnyqCbEvifiM",
    authDomain: "app-crud-70135.firebaseapp.com",
    projectId: "app-crud-70135",
    storageBucket: "app-crud-70135.appspot.com",
    messagingSenderId: "1000041980155",
    appId: "1:1000041980155:web:17b96edc8eeb54ffd3105e"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  
   export const guardarDatos = (nombre, carrera, nivel, participantes) => 
    getDoc(collection(db, "datos"),{nombre, carrera, nivel, participantes});
  
   