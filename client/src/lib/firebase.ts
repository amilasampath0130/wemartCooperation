// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Fixed import
import { getFirestore } from "firebase/firestore";  // Fixed import
import { getStorage } from "firebase/storage";  // Fixed import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1phf1ZYlEzQJz9ZE5LT_oQfAHAzhK55Y",
  authDomain: "we-mart-cooperation.firebaseapp.com",
  projectId: "we-mart-cooperation",
  storageBucket: "we-mart-cooperation.appspot.com",  // Fixed storageBucket
  messagingSenderId: "882069274730",
  appId: "1:882069274730:web:04122e0f6ae3a17f7f8a13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Pass `app` as an argument
export const db = getFirestore(app);  // Pass `app` as an argument
export const storage = getStorage(app);  // Pass `app` as an argument
