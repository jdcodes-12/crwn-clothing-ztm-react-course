import React, { useContext } from 'react';
import { Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/logos/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.config.utils';

import '../../styles/navbar.styles.scss';

const Navbar = () => {

  // Destructure the currentUser from UserContextProvider's
  // `valueObj`.
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log(currentUser); 


  // modifying a state, which is in UserProvider, that isn't local to Navbar component;
  // set back currentUser to null to trigger conditional rendering of Navbar
  const signOutHandler = async (currentUser) => {
    await signOutUser(currentUser);
    setCurrentUser(null); 
  }

  return (
    <>
      <div className='navigation'>
        <Link to='/'>
          <div className='logo-container'>
            <CrwnLogo />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {
            currentUser ? 
              ( <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span> )
            : ( <Link className='nav-link' to='/auth'>SIGN IN</Link> )
          }
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;