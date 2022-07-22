import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import * as Styles from "./styles";

import { useState } from "react";

const valueFrete = 3.76;

interface CheckoutProps {
  total: number;
}

export function Checkout({ total }: CheckoutProps) {
  const { cart } = useContext(CartContext);
  const [message, setMessage] = useState(false);

  function checkMessage() {
    if (cart.length > 0) {
      setMessage(!message);
    }
  }

  return (
    <Styles.WrapperCheckout id="wrapper-checkout">
      <Styles.Delivery>
        <h2 className="title">Entrega</h2>

        <div className="container-info">
          <p className="text">Entrega pela loja ( 5 dias úteis )</p>
        </div>
      </Styles.Delivery>

      <Styles.Shipping>
        <div className="wrapper-shipping">
          <p className="text">Frete</p>
          <p className="text-shipping">
            {total >= 10
              ? "FRETE GRÁTIS"
              : valueFrete.toLocaleString("en-US", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
          </p>
        </div>

        <div className="wrapper-total">
          <p className="text">Total estimado</p>

          <p className="text-total">
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </Styles.Shipping>

      <Styles.Button onClick={checkMessage}>Finalizar comprar</Styles.Button>

      {message && <strong className="final-message">COMPRA REALIZADA!</strong>}
    </Styles.WrapperCheckout>
  );
}
