// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXArdQWwoDM4nf-A_NBlW51u2N3GCOJBU",
  authDomain: "amanchauhanportfolionext.firebaseapp.com",
  projectId: "amanchauhanportfolionext",
  storageBucket: "amanchauhanportfolionext.appspot.com",
  messagingSenderId: "943267076295",
  appId: "1:943267076295:web:7d8427d306b9bc42bd86e2",
  measurementId: "G-Z4TYQDBKZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore  = getFirestore(app);