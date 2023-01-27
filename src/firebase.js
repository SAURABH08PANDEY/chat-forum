// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "forum-61bad.firebaseapp.com",
  projectId: "forum-61bad",
  storageBucket: "forum-61bad.appspot.com",
  messagingSenderId: "332417825593",
  appId: "1:332417825593:web:1a28205460bf719c7586e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)