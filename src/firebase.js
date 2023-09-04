// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKGmKUTM2iHQgGeX4S-0nmuU8397480_A",
  authDomain: "react-auth-firebase-2d0d6.firebaseapp.com",
  projectId: "react-auth-firebase-2d0d6",
  storageBucket: "react-auth-firebase-2d0d6.appspot.com",
  messagingSenderId: "763609138885",
  appId: "1:763609138885:web:c5960fc1ae1a324230d2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);