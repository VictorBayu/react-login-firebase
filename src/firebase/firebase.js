import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWcPhPXVHq7eVjPzsnkYlECL4QML4mT6g",
    authDomain: "react-login-firebase-38f9e.firebaseapp.com",
    databaseURL: "https://react-login-firebase-38f9e.firebaseio.com",
    projectId: "react-login-firebase-38f9e",
    storageBucket: "react-login-firebase-38f9e.appspot.com",
    messagingSenderId: "395230233103",
    appId: "1:395230233103:web:0ce2982f90f921cf2d997a",
    measurementId: "G-Q4HV9NKD8S"
};
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;