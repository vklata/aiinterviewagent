
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  apiKey: "AIzaSyBekxmXwhb1R_ImOOcfZMumF-C4h03BiVM",
  authDomain: "aiinterview-88a39.firebaseapp.com",
  projectId: "aiinterview-88a39",
  storageBucket: "aiinterview-88a39.firebasestorage.app",
  messagingSenderId: "447479863210",
  appId: "1:447479863210:web:2db63df8eb1c387aa1fdd3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}