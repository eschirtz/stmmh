// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzrujDRcw8A7UQJk642xHT0uskE3fStbY",
  authDomain: "shit-that-makes-me-happy.firebaseapp.com",
  projectId: "shit-that-makes-me-happy",
  storageBucket: "shit-that-makes-me-happy.appspot.com",
  messagingSenderId: "351614471309",
  appId: "1:351614471309:web:48779ce85325148d19a6c4",
  measurementId: "G-W4235PJX0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);