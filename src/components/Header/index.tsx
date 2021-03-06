import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import * as Styles from "./styles";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

interface Cart {
  imageSrc: string;
  imageAlt: string;
  title: string;
  olderPrice: number;
  price: number;
  amount: number;
}

export function Header() {
  const { cart } = useContext(CartContext);

  let total = 0,
    totalAmount = 0;

  cart.map((product: Cart) => {
    total += product.price * product.amount;

    if (product.amount > 0) {
      totalAmount += 1;
    }
  });

  return (
    <Styles.WrapperHeader>
      <div className="container">
        <Logo type="default" />

        <Cart amount={total > 0 ? totalAmount : 0} value={total} />
      </div>
    </Styles.WrapperHeader>
  );
}
