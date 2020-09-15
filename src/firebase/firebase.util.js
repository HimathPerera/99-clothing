import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBNqUobI8Vjqfzuscf4wKlR5OEl7WPdYMI",
  authDomain: "clothing-d0513.firebaseapp.com",
  databaseURL: "https://clothing-d0513.firebaseio.com",
  projectId: "clothing-d0513",
  storageBucket: "clothing-d0513.appspot.com",
  messagingSenderId: "61155693164",
  appId: "1:61155693164:web:12370a04e0bc668a20fe49",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//created user doc in firebase
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users /${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};

export default firebase;
