// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPcqsyG6BHRCccFr4pyEGn4Ql1kpNxXQA",
  authDomain: "patrice-portfolio-299b3.firebaseapp.com",
  projectId: "patrice-portfolio-299b3",
  storageBucket: "patrice-portfolio-299b3.firebasestorage.app",
  messagingSenderId: "974095713412",
  appId: "1:974095713412:web:2fc9c6461e154ef780eed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider= new GoogleAuthProvider();