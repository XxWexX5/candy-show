import * as Styled from "./styles";

import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const social = [
  {
    youtube: {
      text: "Youtube",
      icon: <BsYoutube size={30} color="#561B61" />,
    },
    facebook: {
      text: "Facebook",
      icon: <BsFacebook size={30} color="#561B61" />,
    },
    instagram: {
      text: "Instagram",
      icon: <AiFillInstagram size={30} color="#561B61" />,
    },
  },
];

interface SocialMediaProps {
  text: "youtube" | "facebook" | "instagram";
  href: string;
}

export function SocialMedia({ text, href }: SocialMediaProps) {
  return (
    <Styled.SocialMidia href={href} target="_blank">
      {social[0][text].icon}

      <p className="text">{social[0][text].text}</p>
    </Styled.SocialMidia>
  );
}
