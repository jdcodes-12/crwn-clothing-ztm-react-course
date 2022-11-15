import React from 'react';

import Button from '../buttons/Button.component';

import '../../styles/cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'/>
      <Button type='button'>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;