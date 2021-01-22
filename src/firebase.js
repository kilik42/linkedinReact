import firebase from 'firebase'
require('dotenv').config();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwDYfhw2RL5yk0eACkWBlEQ5kEUHQW_yo",
  authDomain: "linkedin-clone-8dd43.firebaseapp.com",
  projectId: "linkedin-clone-8dd43",
  storageBucket: "linkedin-clone-8dd43.appspot.com",
  messagingSenderId: "982385857213",
  appId: "1:982385857213:web:ed5b49f8301824a94e1dd4",
  measurementId: "G-7P2H81Z6SY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};