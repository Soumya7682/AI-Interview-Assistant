
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-52e3c.firebaseapp.com",
  projectId: "fir-52e3c",
  storageBucket: "fir-52e3c.firebasestorage.app",
  messagingSenderId: "541598709233",
  appId: "1:541598709233:web:0ba841a6296a0c42400050"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}