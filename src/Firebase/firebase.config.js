// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHa7gdIGsmerWMsFQ7Y_3wYNaJl025v2A",
  authDomain: "smart-deals-32c6b.firebaseapp.com",
  projectId: "smart-deals-32c6b",
  storageBucket: "smart-deals-32c6b.firebasestorage.app",
  messagingSenderId: "549041877063",
  appId: "1:549041877063:web:7394fb7b263c6dbdb0c162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth=getAuth(app);