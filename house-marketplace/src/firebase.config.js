import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzDZpdj7XYsdIJZXzsIVK5wVG9HBgIHBk",
  authDomain: "house-marketplace-app-df40b.firebaseapp.com",
  projectId: "house-marketplace-app-df40b",
  storageBucket: "house-marketplace-app-df40b.appspot.com",
  messagingSenderId: "20513601543",
  appId: "1:20513601543:web:75b35af3cadafb9dc352a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()