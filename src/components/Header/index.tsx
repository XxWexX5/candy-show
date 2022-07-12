import * as Styles from "./styles";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

interface HeaderProps {
  amount: number;
  total: number;
}

export function Header({ amount, total }: any) {
  return (
    <Styles.WrapperHeader>
      <div className="container">
        <Logo type="default" />

        <Cart amount={amount} value={total} />
      </div>
    </Styles.WrapperHeader>
  );
}
