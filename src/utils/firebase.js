// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2vCLxXug3ZMNMAms4uJMuKGE8b6e1nuc",
  authDomain: "chalne-do.firebaseapp.com",
  projectId: "chalne-do",
  storageBucket: "chalne-do.firebasestorage.app",
  messagingSenderId: "1013930550372",
  appId: "1:1013930550372:web:23c58c058641d747c32b71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
