import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCut9TGXIiH_arARrbAD3lXxtnINHjTecE",
  authDomain: "crwn-clothing-ztm-db-7d6e5.firebaseapp.com",
  projectId: "crwn-clothing-ztm-db-7d6e5",
  storageBucket: "crwn-clothing-ztm-db-7d6e5.appspot.com",
  messagingSenderId: "1057174446646",
  appId: "1:1057174446646:web:b1f6967e79777c45cf6e97"
};

const app = initializeApp(firebaseConfig);

// Auth for site
export const auth = getAuth();

// setup the Google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// create function with better naming to be easier to 
// know which providers are using firebase auth's signInWithPop() method
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);