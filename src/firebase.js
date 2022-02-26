// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLZ0cS_IB3gbZG4xIwTHo8XXbAQ3-4qWg",
  authDomain: "fake-chat-app-a5732.firebaseapp.com",
  projectId: "fake-chat-app-a5732",
  storageBucket: "fake-chat-app-a5732.appspot.com",
  messagingSenderId: "26728872255",
  appId: "1:26728872255:web:16c318537b8eaa46137b8a",
  measurementId: "G-X0S9Y37VEJ",
  databaseURL: process.env.REACT_APP_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };