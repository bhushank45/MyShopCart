import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === product.id);
      if (existing) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === id ? { ...p, quantity: (p.quantity || 1) - 1 } : p,
        )
        .filter((p) => (p.quantity || 0) > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totals = useMemo(() => {
    const totalItems = cart.reduce((s, p) => s + (p.quantity || 0), 0);
    const totalPrice = cart.reduce(
      (s, p) => s + (Number(p.price) || 0) * (p.quantity || 0),
      0,
    );
    return { totalItems, totalPrice };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        ...totals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
