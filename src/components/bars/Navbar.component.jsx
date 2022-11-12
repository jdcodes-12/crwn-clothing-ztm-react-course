import React, { useContext } from 'react';
import { Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/logos/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.config.utils';

import '../../styles/navbar.styles.scss';

const Navbar = () => {

  const { currentUser } = useContext(UserContext);

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
              ( <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> )
            : ( <Link className='nav-link' to='/auth'>SIGN IN</Link> )
          }
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;