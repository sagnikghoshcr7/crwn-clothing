import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2yiiKH_nioMJde3RKHVyEXcrEASRI7lE",
    authDomain: "crwn-db-cd4c2.firebaseapp.com",
    projectId: "crwn-db-cd4c2",
    storageBucket: "crwn-db-cd4c2.appspot.com",
    messagingSenderId: "642660704716",
    appId: "1:642660704716:web:5345f4b2d6b9b253b2fd69",
    measurementId: "G-74R3R8JVJ8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;