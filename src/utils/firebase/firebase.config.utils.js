import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  writeBatch,
  collection,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCut9TGXIiH_arARrbAD3lXxtnINHjTecE",
  authDomain: "crwn-clothing-ztm-db-7d6e5.firebaseapp.com",
  projectId: "crwn-clothing-ztm-db-7d6e5",
  storageBucket: "crwn-clothing-ztm-db-7d6e5.appspot.com",
  messagingSenderId: "1057174446646",
  appId: "1:1057174446646:web:b1f6967e79777c45cf6e97"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Auth is only validation for the site.
// It keeps track of our site when we leave 
// and come back to the browser
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionReference = collection(db, collectionKey);
  const wBatch = writeBatch(db);

  objectsToAdd.forEach((object) => {
      const docReference = doc(collectionReference, object.title.toLowerCase());
      wBatch.set(docReference, object);
    }
  );

  // Fire off the batch write
  await wBatch.commit();
  console.log('Done writing.');
}

export const getCategoriesAndDocuments = async () => {
  const collectionReference = collection(db, 'categories');
  const queryOnCategories = query(collectionReference);

  // Execute query, returns a QuerySnapshot<DocumentData>
  const categoriesQuerySnapshot = await getDocs(queryOnCategories);
  const catgoriesMap = 
    categoriesQuerySnapshot
      .docs
      .reduce((obj, currentDocSnapshot) => {
        // get all fields from the snapshot - returns as Object
        const { title, items } = currentDocSnapshot.data();
        obj[title.toLowerCase()] = items;
        return obj;
      }, {});
      
  return catgoriesMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = { displayName: ''}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) =>  {
  if (!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

/** 
 * `Observer Pattern`
 * 
 *  Listener Object
 * {
 *  next: callback to do for next thing in stream
 *  error: callback to do on error in stream
 *  complete: calleback to call when stream is closed/finished
 * }
*/
export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, 
    callback, 
    (error) => console.log(`error: ${error}`),
    () => console.log('completed stream. closing now.'),
  );