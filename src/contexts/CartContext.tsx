import { createContext, useState } from "react";

export const CartContext = createContext([]);

interface Cart {
  imageSrc: string;
  imageAlt: string;
  title: string;
  olderPrice: number;
  price: number;
  amount: number;
}

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [countAmount, setCountAmount] = useState(0);

  function handleAmount(operation: string, product: Cart) {
    if (operation === "plus") {
      if (countAmount < 99) {
        setCart([...cart, product]);
        setCountAmount(countAmount + 1);
      }
    }

    if (operation === "less") {
      if (countAmount > 0) {
        setCountAmount(countAmount - 1);
      }
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, countAmount, setCountAmount, handleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
