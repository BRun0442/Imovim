// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLQHa85VLnOsJ6Gb12GB4TefafKFvL5zY",
  authDomain: "tcc-firebase-c1952.firebaseapp.com",
  projectId: "tcc-firebase-c1952",
  storageBucket: "tcc-firebase-c1952.appspot.com",
  messagingSenderId: "797995783787",
  appId: "1:797995783787:web:35457d9db3c94cfe5b432e",
  measurementId: "G-2BQF8EJCFL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);