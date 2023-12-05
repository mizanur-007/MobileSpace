// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgTjWKE0rinkXcDS1qXQP5uQx3kxH2_Jo",
  authDomain: "brand-shop-db2ac.firebaseapp.com",
  projectId: "brand-shop-db2ac",
  storageBucket: "brand-shop-db2ac.appspot.com",
  messagingSenderId: "541925102833",
  appId: "1:541925102833:web:9abc5acd053b531fff0550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;