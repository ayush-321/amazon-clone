import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7M0jWcem-swqPS-MaHIKPpy8HwR4v5pw",
  authDomain: "clone-d2fbf.firebaseapp.com",
  projectId: "clone-d2fbf",
  storageBucket: "clone-d2fbf.appspot.com",
  messagingSenderId: "801038024451",
  appId: "1:801038024451:web:08e0a537169a210f2af336",
  measurementId: "G-QWE4DX5LJ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
