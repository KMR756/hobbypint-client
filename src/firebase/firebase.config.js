// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJbJw-F8GUznCcUYX4VAWLCgYbKrBdGY8",
  authDomain: "hobby-point-app.firebaseapp.com",
  projectId: "hobby-point-app",
  storageBucket: "hobby-point-app.firebasestorage.app",
  messagingSenderId: "182972606365",
  appId: "1:182972606365:web:9b7fb5574bbe171d1db174",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
