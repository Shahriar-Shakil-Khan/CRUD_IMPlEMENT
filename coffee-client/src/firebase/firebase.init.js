// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzdixteg5wWSQR_Cz_FV17Kwwa1HVNLw",
  authDomain: "coffee-app-8500a.firebaseapp.com",
  projectId: "coffee-app-8500a",
  storageBucket: "coffee-app-8500a.firebasestorage.app",
  messagingSenderId: "790246433642",
  appId: "1:790246433642:web:2b58409254a976e7ffbb13"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;