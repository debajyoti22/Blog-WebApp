// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfjygx9BsOAKnK_Ilf-ATI835FGdtCBw",
  authDomain: "blogproject2-9ea36.firebaseapp.com",
  projectId: "blogproject2-9ea36",
  storageBucket: "blogproject2-9ea36.appspot.com",
  messagingSenderId: "953592122494",
  appId: "1:953592122494:web:21a109f94071d6dd99dc2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();