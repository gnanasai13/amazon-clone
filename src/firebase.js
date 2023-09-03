import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const firebaseConfig = {
    apiKey: "AIzaSyDKhvRVHVhXf4MLdXIL-jgSIMSsjqGNgDw",
    authDomain: "clone-4f76f.firebaseapp.com",
    databaseURL: "https://clone-4f76f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clone-4f76f",
    storageBucket: "clone-4f76f.appspot.com",
    messagingSenderId: "1040594111807",
    appId: "1:1040594111807:web:71ad3acd630fc0a976d78a",
    measurementId: "G-8V1N4DWPVC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
  
  