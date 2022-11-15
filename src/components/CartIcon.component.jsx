import React, { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

import { ReactComponent as ShoppingBagIcon } from '../assets/icons/shopping-bag.svg';

import '../styles/cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingBagIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;