import { createContext, useEffect, useState } from "react";

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
        const getProductItem = cart.filter(
          (productCart) => productCart.title === product.title
        );

        if (getProductItem.length === 0) {
          product.amount = 1;
        } else {
          product.amount = parseInt(getProductItem[0].amount) + 1;
        }

        const filterCart = cart.filter(
          (productCart) => productCart.title !== product.title
        );

        setCart([...filterCart, product]);
        setCountAmount(countAmount + 1);
      }
    }

    if (operation === "less") {
      if (countAmount > 0) {
        const getProductItem = cart.filter(
          (productCart) => productCart.title === product.title
        );

        if (getProductItem.length === 0) {
          product.amount = 1;
        } else {
          product.amount = parseInt(getProductItem[0].amount) - 1;
        }

        const filterCart = cart.filter(
          (productCart) => productCart.title !== product.title
        );

        setCart([...filterCart, product]);
        setCountAmount(countAmount - 1);
      }
    }

    if (operation === "delete") {
      if (countAmount > 0) {
        const filterCart = cart.filter(
          (productCart) => productCart.title !== product.title
        );

        console.log(cart);

        setCart([...filterCart]);
      }
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, handleAmount }}>
      {children}
    </CartContext.Provider>
  );
}
