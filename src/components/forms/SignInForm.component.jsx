import React, { useState } from 'react';

import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.config.utils';

import FormInput from './inputs/FormInput.component';
import Button from '../buttons/Button.component';

const defaultFormFields = {
  email: '',
  password: '',
};


const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
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
     
    } catch(error) {
      console.error('Error during user creation', error);
    }
  }

  return (
    <div>
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
       <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignInForm;