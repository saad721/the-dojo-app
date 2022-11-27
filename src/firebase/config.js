import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCXEU8atr2tOroYzjZc-8oLN5RoJb6rkZQ",
    authDomain: "thedrellosite.firebaseapp.com",
    projectId: "thedrellosite",
    storageBucket: "thedrellosite.appspot.com",
    messagingSenderId: "1045908274723",
    appId: "1:1045908274723:web:5006abf96a17ab7a833b96"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// 
const timestamp = firebase.firestore.Timestamp

export { projectFirestore , projectAuth , timestamp, projectStorage }