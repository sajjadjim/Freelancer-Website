// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTGxXTB7UxvOCTuwx2bsS_f1aqXYHMggs",
  authDomain: "freelance-task-marketpla-6d7e7.firebaseapp.com",
  projectId: "freelance-task-marketpla-6d7e7",
  storageBucket: "freelance-task-marketpla-6d7e7.firebasestorage.app",
  messagingSenderId: "161039485294",
  appId: "1:161039485294:web:bae6e6ed6a286beb41997f",
  measurementId: "G-RXW3Y4M5BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;