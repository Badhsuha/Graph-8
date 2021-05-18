import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAOhWnqPrmwvzg2HV64Djwr3LM-rhLW9Go",
  authDomain: "graph8-36ade.firebaseapp.com",
  databaseURL:
    "https://graph8-36ade-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "graph8-36ade",
  storageBucket: "graph8-36ade.appspot.com",
  messagingSenderId: "344313771466",
  appId: "1:344313771466:web:4fe402ce8dd728e6b8cb33",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
