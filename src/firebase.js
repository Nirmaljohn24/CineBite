// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQyZTDhcPg1lpPyy-uvQG6kuW8VljfgZE",
  authDomain: "cinebite-94417.firebaseapp.com",
  projectId: "cinebite-94417",
  storageBucket: "cinebite-94417.firebasestorage.app",
  messagingSenderId: "488638650791",
  appId: "1:488638650791:web:2a276469a109d672fbfe82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);