import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDYQ2egT_viMIVbXP6ye18kS6a8Wrd1f4k",
  authDomain: "todo-app-557ac.firebaseapp.com",
  projectId: "todo-app-557ac",
  storageBucket: "todo-app-557ac.appspot.com",
  messagingSenderId: "811980580465",
  appId: "1:811980580465:web:741c1ce83b8340b38dddd0",
  measurementId: "G-WW9YPGB8NV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = GoogleAuthProvider(auth);

export {auth, googleProvider}