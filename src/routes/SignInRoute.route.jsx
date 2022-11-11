import React, { useEffect } from 'react';

import { 
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
 } from '../utils/firebase/firebase.config.utils';

 import SignUpForm from '../components/forms/SignUpForm.component';
 import SignInForm from '../components/forms/SignInForm.component';

const SignInRoute = () => {


  // Helper function to wrap signInWithGooglePopup()
  // so the action can be asynchronous. Requires
  // `async` and `await` keywords. Log response
  // to make sure some data was returned.
  const authorizeGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={authorizeGoogleUser}>
        Sign in with Google
      </button>
      <SignUpForm />
      <SignInForm />
    </div>
  );
}

export default SignInRoute;