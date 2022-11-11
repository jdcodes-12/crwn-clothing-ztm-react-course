import React, { useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.config.utils';

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
        <label htmlFor="displayName">Display Name</label>
        <input  required 
                type="text" 
                name='displayName' 
                value={displayName}
                onChange={handleChange}
                />

        <label htmlFor="email">Email</label>
        <input required 
                type="email" 
                name='email' 
                value={email}
                onChange={handleChange}
                />

        <label htmlFor="password">Password</label>
        <input  required 
                type="password" 
                name='password' 
                value={password}
                onChange={handleChange}
                />

        <label htmlFor="">Confirm Password</label>
        <input  required 
                type="password" 
                name='confirmPassword' 
                value={confirmPassword}
                onChange={handleChange}
                />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;