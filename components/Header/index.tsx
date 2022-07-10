import * as Styles from "./styles";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

export function Header() {
  return (
    <Styles.WrapperHeader>
      <div className="container">
        <Logo type="default" />

        <Cart amount={2} value={20} />
      </div>
    </Styles.WrapperHeader>
  );
}
