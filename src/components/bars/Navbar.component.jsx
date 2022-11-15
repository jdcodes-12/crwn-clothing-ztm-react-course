import React, { useContext } from 'react';
import { Outlet, Link} from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/logos/crown.svg';
import CartIcon from '../CartIcon.component';
import CartDropdown from '../dropdowns/CartDropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.config.utils';

import '../../styles/navbar.styles.scss';

// Components will always be truth values b/c they are components. Using short
// circuiting here. 
const Navbar = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
              ( <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> )
            : ( <Link className='nav-link' to='/auth'>SIGN IN</Link> )
          }
          <CartIcon />
          { isCartOpen && <CartDropdown /> }  
         
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;