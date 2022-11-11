import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';

/**
 * Learning Notes:
 * 
 * Firebase Authentication Service:
 *  - users registered in the auth service, regardless of auth method/provider,
 *    doesn't directly mean they are accessible from the Firestore database (e.g.
 *    no information has been stored about these users in the DB)
 * 
 */

// Generate Auth for Firebase client
export const auth = getAuth();

// setup the Google provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// create function with better naming to be easier to 
// know which providers are using firebase auth's signInWithPop() method
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);