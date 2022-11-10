import React from 'react';
import { signInWithGooglePopUp } from '../utils/firebase/firebase.utils';

const SignInRoute = () => {

  // Helper function to wrap signInWithGooglePopup()
  // so the action can be asynchronous. Requires
  // `async` and `await` keywords. Log response
  // to make sure some data was returned.
  const authorizeGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={authorizeGoogleUser}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignInRoute;