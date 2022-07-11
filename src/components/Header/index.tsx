import * as Styles from "./styles";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

interface HeaderProps {
  amount: number;
}

export function Header({ amount }: HeaderProps) {
  return (
    <Styles.WrapperHeader>
      <div className="container">
        <Logo type="default" />

        <Cart amount={0} value={20} />
      </div>
    </Styles.WrapperHeader>
  );
}
