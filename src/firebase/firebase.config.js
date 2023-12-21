// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXyAt9cTHsFyr1SoCu5aKA4YwPoBYlwmw",
  authDomain: "tasknova-505ff.firebaseapp.com",
  projectId: "tasknova-505ff",
  storageBucket: "tasknova-505ff.appspot.com",
  messagingSenderId: "982662448891",
  appId: "1:982662448891:web:2827881bbdee0ba50ad25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);