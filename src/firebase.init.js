// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMr28pRKNlYK0ePKqUcmfoyZGsGdHkF1I",
  authDomain: "conceptua-1.firebaseapp.com",
  projectId: "conceptua-1",
  storageBucket: "conceptua-1.appspot.com",
  messagingSenderId: "1011718759935",
  appId: "1:1011718759935:web:38a89f64ad40cb00c5b3ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
