import React, { createContext, useState, useEffect} from 'react';

// Structure of a CartItem object
// cartItem {
//     id: '',
//     name: '',
//     imageUrl: '',
//     price: '',
//     quantity: ''
// }

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // Calculate & set current cart size anytime cartItems changes
    useEffect(() => {
      const newCartCount = 
        cartItems
          .reduce(
            (totalSize, cartItem) => 
              totalSize + cartItem.quantity, 0
          );

      setCartCount(newCartCount);
    }, [cartItems]);

    // Calculate & set new price anytime cartItems changes
    useEffect(() => {
      const newCartTotal = 
        cartItems
          .reduce(
            (totalPrice, cartItem) => 
              totalPrice + (cartItem.quantity * cartItem.price), 0
          );

      setCartTotal(newCartTotal);
    }, [cartItems]);

    // Cart handling methods
    const addItemToCart = (product) => {
      setCartItems(addCartItem(cartItems, product));
    }

    const removeItemFromCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value = { 
      isCartOpen, 
      setIsCartOpen, 
      addItemToCart, 
      removeItemFromCart,
      clearItemFromCart,
      cartItems,
      cartCount, 
      cartTotal,
    };

    return (
      <CartContext.Provider value={value}>
          {children}
      </CartContext.Provider>
    );
}

// Utility Methods for handling cartitems
const addCartItem = (cartItems, productToAdd) => {
    // return a cart item if the id matches the product id
    const existingItem = cartItems.find(
      (item) => item.id === productToAdd.id
    );

    if (existingItem) {
      return  cartItems.map(
                (item) => item.id === productToAdd.id 
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );    
    }

    return [ ...cartItems, { ...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  // Remove the item if it's quantity is 1
  if (existingItem.quantity === 1) {
    return  cartItems.filter(
              (item) => item.id !== cartItemToRemove.id
            );
  }
  
  // Need to create new objects so React will trigger
  // a render. Since in react, UI rerenders whenever
  // state or props change of a component.
  return cartItems.map(
    (item) => item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1} 
      : item
  );
}

const clearCartItem = (cartItems, cartItemToClear) => {
  // Grab items that don't match the id of the item to remove
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
}

