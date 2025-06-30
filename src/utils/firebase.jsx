// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Xhc_6RGXqLiDF967WVsznP-KbDqgp0Q",
  authDomain: "netflixgpt-409c0.firebaseapp.com",
  projectId: "netflixgpt-409c0",
  storageBucket: "netflixgpt-409c0.firebasestorage.app",
  messagingSenderId: "706438667534",
  appId: "1:706438667534:web:c61d2aab6a0338c8d20b5f",
  measurementId: "G-JH2FN4F14Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
