import React from 'react';
import { Outlet, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/'>
          <div className='logo-container'>Logo</div>
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