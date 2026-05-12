// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDrTbtdgd3lBXZhUPCo1TA_LYIYebInY5c",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "netflixgpt-956b8.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "netflixgpt-956b8",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "netflixgpt-956b8.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "760242373185",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:760242373185:web:f6e43fd32ac1e02b55fcc0",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-BC8P27GC85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();