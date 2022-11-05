// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMpqEbnEWpk_qlSnm5O7O4cFQDB7IE-cE",
  authDomain: "react-crud-c9463.firebaseapp.com",
  projectId: "react-crud-c9463",
  storageBucket: "react-crud-c9463.appspot.com",
  messagingSenderId: "245980275039",
  appId: "1:245980275039:web:f053e7227cc217c75ad6ea",
  measurementId: "G-E5MW7JFK9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);