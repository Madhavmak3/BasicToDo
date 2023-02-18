import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS2okuoGX1jSRgttNDW3XrEA7kyQsJ9W8",
  authDomain: "todo-b9a25.firebaseapp.com",
  projectId: "todo-b9a25",
  storageBucket: "todo-b9a25.appspot.com",
  messagingSenderId: "913977813950",
  appId: "1:913977813950:web:a9f192023e4b8fffac67ef",
  measurementId: "G-EHFW36BJYC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
