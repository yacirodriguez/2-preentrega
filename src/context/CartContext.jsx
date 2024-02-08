import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const itemQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeItem = (id, quantity) => {
    // Encuentra el ítem con el id dado
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      if (itemToRemove.cantidad === quantity) {
        // Si la cantidad a eliminar es igual a la cantidad en el carrito, eliminar completamente el ítem
        setCart(cart.filter((item) => item.id !== id));
      } else {
        // Si la cantidad a eliminar es menor que la cantidad en el carrito, actualizar la cantidad
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad - quantity };
          }
          return item;
        });
        setCart(updatedCart);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        isInCart,
        itemQuantity,
        total,
        emptyCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
