import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBaAm_8iYO_eE3p4vetPy2jwWTmrLsRoYI",
  authDomain: "crown-db-8f933.firebaseapp.com",
  databaseURL: "https://crown-db-8f933.firebaseio.com",
  projectId: "crown-db-8f933",
  storageBucket: "crown-db-8f933.appspot.com",
  messagingSenderId: "160504058796",
  appId: "1:160504058796:web:b5c20bc9411257ef8b2009",
  measurementId: "G-WLML72ML8E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
