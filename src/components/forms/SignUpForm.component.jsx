import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.config.utils';

import FormInput from '../forms/inputs/FormInput.component';
import Button from '../buttons/Button.component';

import '../../styles/sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  const { setCurrentUser } = useContext(UserContext);

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
      setCurrentUser(user);
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
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email & password</span>
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

       {/* submit triggers onSubmit */}
       <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;