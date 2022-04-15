// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdSmra6eGgowJ_pmFBvwK4ZZoxsb908dg",
  authDomain: "emajon-simple-77385.firebaseapp.com",
  projectId: "emajon-simple-77385",
  storageBucket: "emajon-simple-77385.appspot.com",
  messagingSenderId: "678401584350",
  appId: "1:678401584350:web:ad640e97121d313298664f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;