// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrTbtdgd3lBXZhUPCo1TA_LYIYebInY5c",
  authDomain: "netflixgpt-956b8.firebaseapp.com",
  projectId: "netflixgpt-956b8",
  storageBucket: "netflixgpt-956b8.firebasestorage.app",
  messagingSenderId: "760242373185",
  appId: "1:760242373185:web:f6e43fd32ac1e02b55fcc0",
  measurementId: "G-BC8P27GC85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);