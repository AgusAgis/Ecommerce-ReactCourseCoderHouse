import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHQAg7d_lc0oBOKg3IIXUWz8kgRxmhk9o",
  authDomain: "ecommerce-mascotitas.firebaseapp.com",
  projectId: "ecommerce-mascotitas",
  storageBucket: "ecommerce-mascotitas.appspot.com",
  messagingSenderId: "606944269839",
  appId: "1:606944269839:web:725866e0d289431140f57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
