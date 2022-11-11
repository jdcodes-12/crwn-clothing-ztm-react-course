import React, { useState} from 'react';

import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from '../utils/firebase/firebase.config.utils';

import FormInput from '../components/forms/inputs/FormInput.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // Spread the frest of the formFields, then update `name`
  // with `value`
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  const handleSumbit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create account because the email is already taken.');
      } else {
        console.error('Error during user creation', error);
      }
    }
  }

  return (
    <div>
      <h1>Sign up with email & password</h1>
      <form onSubmit={handleSumbit}>
        <FormInput  name='displayName'
                    value={displayName}
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    />
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
        <FormInput  name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;