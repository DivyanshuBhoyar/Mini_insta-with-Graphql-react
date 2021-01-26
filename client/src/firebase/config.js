import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyHiI6hT5eLRjOylILCkPux-DVgfD8eBc",
  authDomain: "myfirebaseproject-1-5f3d1.firebaseapp.com",
  projectId: "myfirebaseproject-1-5f3d1",
  storageBucket: "myfirebaseproject-1-5f3d1.appspot.com",
  messagingSenderId: "211084905452",
  appId: "1:211084905452:web:1b7b80d616f18a51078ec9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, timestamp };
