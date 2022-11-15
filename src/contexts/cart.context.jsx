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
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // Calculate & set current cart size anytime cartItems changes
    useEffect(() => {
      const newCartCount = 
      cartItems.reduce((totalSize, cartItem) => totalSize + cartItem.quantity, 0);
      setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (product) => {
      setCartItems(putProductInCart(cartItems, product));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return (
      <CartContext.Provider value={value}>
          {children}
      </CartContext.Provider>
    );
}

// Utility Methods
export const putProductInCart = (cartItems, productToAdd) => {
    // return a cart item if the id matches the product id
    const existingItem = cartItems.find(
      (item) => item.id === productToAdd.id
    );

    if (existingItem) {
      return  cartItems.map((item) => 
                item.id === productToAdd.id 
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );    
    }

    return [ ...cartItems, { ...productToAdd, quantity: 1}];
}