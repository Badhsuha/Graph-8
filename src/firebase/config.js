import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "Your Api key",
  authDomain: "domain name",
  databaseURL:
    "db url",
  projectId: "project Id",
  storageBucket: "Storge Bucket",
  messagingSenderId: "ID",
  appId: "App Id",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
