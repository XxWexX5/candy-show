import { createContext, useState, useEffect, ReactNode } from "react";

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

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem
      ? JSON.parse(localStorage.getItem("cart") as any)
      : [];

    setCart(cartStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function cleanningCart() {
    let total = 0;

    cart.map((product: Cart) => {
      total += product.amount;
    });

    if (cart.length > 0 && total === 0) {
      setCart([]);
    }
  }

  function handleAmount(operation: string, product: Cart) {
    if (operation === "plus") {
      const getProductItem = cart.filter(
        (productCart) => productCart.title === product.title
      );

      if (getProductItem.length === 0) {
        product.amount = 1;
      } else {
        product.amount = getProductItem[0].amount + 1;
      }

      if (product.amount > 99) {
        product.amount = 99;
      }

      const filterCart = cart.filter(
        (productCart) => productCart.title !== product.title
      );

      setCart([...filterCart, product]);
    }

    if (operation === "less" && cart.length > 0) {
      const getProductItem = cart.filter(
        (productCart) => productCart.title === product.title
      );

      if (getProductItem.length > 0) {
        product.amount = getProductItem[0].amount - 1;

        if (product.amount < 1) {
          product.amount = 0;

          const filterCart = cart.filter(
            (productCart) => productCart.title !== product.title
          );

          setCart([...filterCart, product]);
        } else {
          const filterCart = cart.filter(
            (productCart) => productCart.title !== product.title
          );

          setCart([...filterCart, product]);
        }
      }
    }

    if (operation === "delete") {
      const filterCart = cart.filter(
        (productCart) => productCart.title !== product.title
      );

      setCart([...filterCart]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, handleAmount }}>
      {children}
    </CartContext.Provider>
  );
}
