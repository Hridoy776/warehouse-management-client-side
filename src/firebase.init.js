// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvYRlDWTsEiwK0RatsvEdX-EJZxRKUyK0",
  authDomain: "pristine-perfumes.firebaseapp.com",
  projectId: "pristine-perfumes",
  storageBucket: "pristine-perfumes.appspot.com",
  messagingSenderId: "492500093114",
  appId: "1:492500093114:web:7afc43c87c21fe69169a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;