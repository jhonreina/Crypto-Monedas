// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmIloTYqlf6t6KuHGCCVfnkYTbaW7pEkE",
  authDomain: "cripto-monedas-a4ca0.firebaseapp.com",
  projectId: "cripto-monedas-a4ca0",
  storageBucket: "cripto-monedas-a4ca0.appspot.com",
  messagingSenderId: "1005310531318",
  appId: "1:1005310531318:web:0a6476d37b6e4bd58dfed7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
