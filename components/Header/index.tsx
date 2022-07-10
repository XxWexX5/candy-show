import * as Styles from "./styles";

import Link from "next/link";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

export function Header() {
  return (
    <Styles.WrapperHeader>
      <div className="container">
        <Link href="/">
          <Logo type="default" />
        </Link>

        <Link href="cart">
          <Cart amount={2} value={20} />
        </Link>
      </div>
    </Styles.WrapperHeader>
  );
}
