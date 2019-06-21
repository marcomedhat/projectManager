import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqLgqPzOq6NiLhQbHjBfvEwawTO_9PxXo",
  authDomain: "todo-ninja-109fa.firebaseapp.com",
  databaseURL: "https://todo-ninja-109fa.firebaseio.com",
  projectId: "todo-ninja-109fa",
  storageBucket: "todo-ninja-109fa.appspot.com",
  messagingSenderId: "732007427344",
  appId: "1:732007427344:web:60f0745a69f22fc5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;