import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGmpnx0jIwEYvV-LEzZ6k_rbdfw-y1_FY",
  authDomain: "evernote-clone-f1a6c.firebaseapp.com",
  projectId: "evernote-clone-f1a6c",
  storageBucket: "evernote-clone-f1a6c.appspot.com",
  messagingSenderId: "764457080873",
  appId: "1:764457080873:web:d0863bb6391e2896166438"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
