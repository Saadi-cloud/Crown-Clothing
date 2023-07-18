// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBezZbC0P0c3RLfsYZdyyLNh2jKSKn9iIU",
  authDomain: "crown-cloth-68087.firebaseapp.com",
  projectId: "crown-cloth-68087",
  storageBucket: "crown-cloth-68087.appspot.com",
  messagingSenderId: "379264003503",
  appId: "1:379264003503:web:fed376f010bc7c17c7135a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userRef = doc(db, "users", userAuth.uid);
  const userData = await getDoc(userRef);
  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating User document:", error.message);
    }
  }
  return userData;
};
