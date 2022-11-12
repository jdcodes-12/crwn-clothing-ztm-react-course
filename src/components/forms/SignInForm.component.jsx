import React, { useState } from 'react';

import { 
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.config.utils';

import FormInput from '../forms/inputs/FormInput.component';
import Button from '../buttons/Button.component';

import '../../styles/sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // Helper function to sign in a user with Google
  // then create a user documeent from that auth
  // if not already created
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  // Spread the frest of the formFields, then update `name`
  // with `value`. Genericizing the handler function.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  const handleSumbit = async (event) => {
    event.preventDefault();

    try {
      
     const { user } = await signInAuthUserWithEmailAndPassword(email, password);
     resetFormFields();

    } catch(error) {
      
      switch(error.code) {
        case 'auth/wrong-password':
          alert('No password is associated with that email. Try a new password.');
          break;
        case 'auth/user-not-found':
          alert('No user is associated with that email. Try creating an account via sign up');
          break;
        default:
          console.log(error);
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with email & password</span>
      <form onSubmit={handleSumbit}>
        <FormInput  name='email'
                    value={email}
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    />
        <FormInput  name='password'
                    value={password}
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    />
                    
       {/* submit triggers onSubmit */}
       <div className='buttons-container'>
        <Button type='submit'>Sign Up</Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
       </div>
      </form>
    </div>
  );
}

export default SignInForm;