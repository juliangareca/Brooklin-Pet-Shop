// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLAuSkwwPO_jnlN1IxDUd4yhFtPCTul9s",
  authDomain: "brookling-pet-shop.firebaseapp.com",
  projectId: "brookling-pet-shop",
  storageBucket: "brookling-pet-shop.appspot.com",
  messagingSenderId: "232428218404",
  appId: "1:232428218404:web:436c8a1ad3fccf99e610b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore initialize
const db = getFirestore(app)


export default db
