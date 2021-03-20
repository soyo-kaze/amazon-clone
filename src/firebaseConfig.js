import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANKU8kxlakmutoarf6_YClWOcLnuBR5Q4",
  authDomain: "clone-94aa9.firebaseapp.com",
  projectId: "clone-94aa9",
  storageBucket: "clone-94aa9.appspot.com",
  messagingSenderId: "896970916646",
  appId: "1:896970916646:web:a975b62b047ab097ef77e7",
  measurementId: "G-DH7WSG2KBP",
};

const firebaseInit = firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, googleProvider };
