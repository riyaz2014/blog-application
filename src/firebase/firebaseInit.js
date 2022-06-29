import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBsH__nT4OSLSvDMdrwDdjQIJmhsrfkYFo",
  authDomain: "blog-application-eaefd.firebaseapp.com",
  projectId: "blog-application-eaefd",
  storageBucket: "blog-application-eaefd.appspot.com",
  messagingSenderId: "396890073180",
  appId: "1:396890073180:web:60dfe36c45d96f858ede99"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();