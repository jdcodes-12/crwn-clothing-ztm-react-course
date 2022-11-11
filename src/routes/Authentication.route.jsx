import SignUpForm from '../components/forms/SignUpForm.component';
import SignInForm from '../components/forms/SignInForm.component';

import '../styles/authentiation.styles.scss';

const AuthenticationRoute = () => {
  return (
    <div className='authentication-container'>
      <SignUpForm />
      <SignInForm />
    </div>
  );
}

export default AuthenticationRoute;