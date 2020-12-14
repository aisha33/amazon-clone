import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRbGSp0ki-hZ3Fclb80XhsM6E_L4QywuE",
  authDomain: "clone1-bfbce.firebaseapp.com",
  projectId: "clone1-bfbce",
  storageBucket: "clone1-bfbce.appspot.com",
  messagingSenderId: "131107919328",
  appId: "1:131107919328:web:d7aba9c4122849a236c785",
  measurementId: "G-4QMCCZ9BHG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };