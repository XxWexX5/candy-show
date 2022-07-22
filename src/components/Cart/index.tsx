import { Link } from "react-scroll";

import * as Styles from "./styles";

import Image from "next/image";

interface CartProps {
  amount: number;
  value: number;
}

export function Cart({ amount, value }: CartProps) {
  return (
    <Link
      activeClass="active"
      to="wrapper-checkout"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <Styles.WrapperCart>
        <Styles.Cart>
          <Styles.Amount className={amount > 99 ? "big-circle" : ""}>
            <span>{amount > 99 ? "+99" : amount}</span>
          </Styles.Amount>

          <Image src="/images/icon-cart.svg" alt="Icon cart." layout="fill" />
        </Styles.Cart>

        <Styles.Price>
          {value.toLocaleString("en-US", {
            style: "currency",
            currency: "BRL",
          })}
        </Styles.Price>
      </Styles.WrapperCart>
    </Link>
  );
}
