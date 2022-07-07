import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBLAuSkwwPO_jnlN1IxDUd4yhFtPCTul9s",
  authDomain: "brookling-pet-shop.firebaseapp.com",
  projectId: "brookling-pet-shop",
  storageBucket: "brookling-pet-shop.appspot.com",
  messagingSenderId: "232428218404",
  appId: "1:232428218404:web:436c8a1ad3fccf99e610b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default db
