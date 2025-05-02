// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLJnCX8nWiSl41qLwhTsieGz4TqQdlTNE",
  authDomain: "dragon-news-auth-b5361.firebaseapp.com",
  projectId: "dragon-news-auth-b5361",
  storageBucket: "dragon-news-auth-b5361.firebasestorage.app",
  messagingSenderId: "926122921829",
  appId: "1:926122921829:web:403a5dd54325cfc9e09b8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
