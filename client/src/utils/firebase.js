
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewassist-270ad.firebaseapp.com",
  projectId: "interviewassist-270ad",
  storageBucket: "interviewassist-270ad.firebasestorage.app",
  messagingSenderId: "320861523982",
  appId: "1:320861523982:web:f775709820f56b89feec5f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}

// i already push my project into github anf deploy in the render before 1month but now i change my .env file show how can update it on github and render