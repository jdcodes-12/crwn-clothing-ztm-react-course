import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../CartItem.component';
import Button from '../buttons/Button.component';

import '../../styles/cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(
            (item) => <CartItem key={item.id} cartItem={item}/>
          )
        }
      </div>
      <Button type='button'>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;