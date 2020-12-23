// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAdBQt7PtUQF83N881S5Ds08pcxvxLMYZ4",
  authDomain: "todo-app-8f2f9.firebaseapp.com",
  projectId: "todo-app-8f2f9",
  storageBucket: "todo-app-8f2f9.appspot.com",
  messagingSenderId: "25557613771",
  appId: "1:25557613771:web:26b497942b834fd3c42f4e",
  measurementId: "G-S1TGR47Y0N",
});

var db = firebase.firestore();

export default db;
