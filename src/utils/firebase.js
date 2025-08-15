// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcqcx_dnFHsgXnR3VdIY8DQTu8PAPx2Mk",
  authDomain: "netflixgpt-c888e.firebaseapp.com",
  projectId: "netflixgpt-c888e",
  storageBucket: "netflixgpt-c888e.firebasestorage.app",
  messagingSenderId: "507751505781",
  appId: "1:507751505781:web:144e9b2c4ed8b96b9afd3c",
  measurementId: "G-PVJ0WGDHN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);