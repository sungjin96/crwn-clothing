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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
