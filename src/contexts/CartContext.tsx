import { createContext, useState, ReactNode } from "react";

interface Cart {
  imageSrc: string;
  imageAlt: string;
  title: string;
  olderPrice: number;
  price: number;
  amount: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Cart[];
  setCart: any;
  handleAmount: (operation: string, product: Cart) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);
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
          product.amount = getProductItem[0].amount + 1;
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
          product.amount = getProductItem[0].amount - 1;
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
