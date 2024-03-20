// cart-context.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity, size) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItemIndex > -1) {
        let newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { product, quantity, size }];
      }
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId || item.size !== size)
    );
  };

  const updateQuantity = (productId, size, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.product.id === productId && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
