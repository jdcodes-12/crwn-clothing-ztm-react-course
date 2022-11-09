import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/logos/crown.svg';

import '../../styles/navbar.styles.scss';

const Navbar = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/'>
          <div className='logo-container'>
            <CrwnLogo />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>Shop</Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;