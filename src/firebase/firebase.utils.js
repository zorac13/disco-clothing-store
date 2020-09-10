import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD9--ynEGvumOu7K6Uqa1I5HcZbGI4yq-o",
  authDomain: "shop-app-fce7d.firebaseapp.com",
  databaseURL: "https://shop-app-fce7d.firebaseio.com",
  projectId: "shop-app-fce7d",
  storageBucket: "shop-app-fce7d.appspot.com",
  messagingSenderId: "110229938082",
  appId: "1:110229938082:web:08f469a915e0075c151cfb",
  measurementId: "G-KKH14TPZ9T",
};

firebase.initializeApp(config);

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
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
