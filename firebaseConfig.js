import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'spaceoutcat.firebaseapp.com',
  projectId: 'spaceoutcat',
  storageBucket: 'spaceoutcat.appspot.com',
  messagingSenderId: '1083711553888',
  appId: '1:1083711553888:web:f930275a45765fc5931e05',
  measurementId: 'G-E8VK78VYFL',
};

firebase.initializeApp(firebaseConfig);

const db = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Function to sign in with Google
export const signInWithGoogle = async (router) => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userId = user.uid;
    const userRef = doc(db, 'users', userId);

    const docSnapshot = await getDoc(userRef);
    if (!docSnapshot.exists()) {
      await setDoc(userRef, {
        uid: userId,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
        notification: false,
      });
    }

    router.push('/profile');
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to sign out
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    throw new Error(err.message);
  }
};
