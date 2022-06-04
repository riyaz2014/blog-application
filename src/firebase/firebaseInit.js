// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsH__nT4OSLSvDMdrwDdjQIJmhsrfkYFo",
  authDomain: "blog-application-eaefd.firebaseapp.com",
  projectId: "blog-application-eaefd",
  storageBucket: "blog-application-eaefd.appspot.com",
  messagingSenderId: "396890073180",
  appId: "1:396890073180:web:60dfe36c45d96f858ede99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const timestamp = db.timestamp
console.log(timestamp)

export {auth , db};
export default app;