// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2RW5a4vx6j19IWACV6-Eg_hMBFxppL0U",
  authDomain: "stock-keeper-38200.firebaseapp.com",
  projectId: "stock-keeper-38200",
  storageBucket: "stock-keeper-38200.firebasestorage.app",
  messagingSenderId: "508215901336",
  appId: "1:508215901336:web:e1b1421a2f9bc76c8de4ed",
  measurementId: "G-1N5RS3JRKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and EXPORT Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);