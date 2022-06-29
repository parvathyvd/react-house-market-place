import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhaAeVDKQhT4EGykEcQMmi0hXSLv6L6Gg",
  authDomain: "house-market-place-8456e.firebaseapp.com",
  projectId: "house-market-place-8456e",
  storageBucket: "house-market-place-8456e.appspot.com",
  messagingSenderId: "903927489097",
  appId: "1:903927489097:web:bd3113f6d96158e4f6d598",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
