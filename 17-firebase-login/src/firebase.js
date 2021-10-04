import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLOIPIgh4HwfTJQPcgsWL835jTFLwjHIY",
    authDomain: "react-email-login-9ce92.firebaseapp.com",
    projectId: "react-email-login-9ce92",
    storageBucket: "react-email-login-9ce92.appspot.com",
    messagingSenderId: "910091905354",
    appId: "1:910091905354:web:29b5acd8baae93ef71b9b3"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;