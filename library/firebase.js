// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFfyOhPc8p77k7HjnsKL85xqyqPSyu5vg",
  authDomain: "chow-elect.firebaseapp.com",
  projectId: "chow-elect",
  storageBucket: "chow-elect.appspot.com",
  messagingSenderId: "153526935234",
  appId: "1:153526935234:web:37655eab77c24a6fb8255b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default app