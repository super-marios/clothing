import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKJHWOmYMzLNC-8iNKMzxirjxh8WWgaFc",
  authDomain: "crwn-db-f43bb.firebaseapp.com",
  databaseURL: "https://crwn-db-f43bb.firebaseio.com",
  projectId: "crwn-db-f43bb",
  storageBucket: "crwn-db-f43bb.appspot.com",
  messagingSenderId: "216717129539",
  appId: "1:216717129539:web:7154f7001207abf76621f6",
  measurementId: "G-7ZZK9X7GXB",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  console.log(userRef);

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
