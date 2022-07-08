import * as Styles from "./styles";

import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";

export function Footer() {
  return (
    <Styles.WrapperFooter>
      <div className="container">
        <Logo type="purple" />

        <div className="wrapper-social-media">
          <SocialMedia text="youtube" href="https://www.youtube.com" />

          <SocialMedia text="facebook" href="https://www.facebook.com" />

          <SocialMedia text="instagram" href="https://www.instagram.com" />
        </div>
      </div>
    </Styles.WrapperFooter>
  );
}
