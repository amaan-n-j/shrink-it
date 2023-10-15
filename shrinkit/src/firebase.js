import friebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbm6mEMNPKZNG62NLo0WkA4q3W7im0D5E",
    authDomain: "shrink-it-c8e1f.firebaseapp.com",
    projectId: "shrink-it-c8e1f",
    storageBucket: "shrink-it-c8e1f.appspot.com",
    messagingSenderId: "659502339477",
    appId: "1:659502339477:web:247fd1e6983e69da22d29c",
    measurementId: "G-DSMD6SW6FT"
  };

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();