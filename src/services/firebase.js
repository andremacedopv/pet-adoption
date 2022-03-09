// Import the functions you need from the SDKs you need
//import { initializeApp, database } from "firebase/app";
import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBgJC954HLnjUM2vhE2pVAkJ45NCQ3i34",
  authDomain: "pet-adoption-1103.firebaseapp.com",
  databaseURL: "https://pet-adoption-1103-default-rtdb.firebaseio.com",
  projectId: "pet-adoption-1103",
  storageBucket: "pet-adoption-1103.appspot.com",
  messagingSenderId: "117309777696",
  appId: "1:117309777696:web:ef8490045a25711d445945",
  measurementId: "G-TNV8L2TEYH"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

var database = firebase.firestore();
var storage = firebase.storage();

export {firebase, database, storage}