import React, { useState} from 'react';

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
  
  // Spread the frest of the formFields, then update `name`
  // with `value`
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }
  return (
    <div>
      <h1>Sign up with email & password</h1>
      <form onSubmit={() => {}}>
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