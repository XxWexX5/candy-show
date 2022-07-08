import * as Styled from "./styles";

import { Logo } from "../Logo";
import { Cart } from "../Cart";

export function Header() {
  return (
    <Styled.WrapperHeader>
      <div className="container">
        <Logo type="default" />

        <Cart amount={2} value={20} />
      </div>
    </Styled.WrapperHeader>
  );
}
