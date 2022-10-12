import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCiZlwXgiwDJuDfOlCmLqddMwEmdzP-yd4",
  authDomain: "proycursoreact.firebaseapp.com",
  projectId: "proycursoreact",
  storageBucket: "proycursoreact.appspot.com",
  messagingSenderId: "1030091619895",
  appId: "1:1030091619895:web:96000775d83066a21b49b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)