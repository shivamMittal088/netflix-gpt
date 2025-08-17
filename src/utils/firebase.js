// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIAI6AK_RZoH-fW1Zzbp3scWd4rd_ujAg",
  authDomain: "netflixgpt-9c971.firebaseapp.com",
  projectId: "netflixgpt-9c971",
  storageBucket: "netflixgpt-9c971.firebasestorage.app",
  messagingSenderId: "891260852873",
  appId: "1:891260852873:web:176aad21b9025c84ab4458",
  measurementId: "G-XGVQ85SG9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();