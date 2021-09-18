import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyD30IifacQA3rjnnZz-HWzWY3ZvtpdYvi4",
  authDomain: "love-calculat.firebaseapp.com",
  projectId: "love-calculat",
  storageBucket: "love-calculat.appspot.com",
  messagingSenderId: "1465937917",
  appId: "1:1465937917:web:8b59b0bb127b90b0c93394",
  measurementId: "G-6BSWQF8SEK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth};