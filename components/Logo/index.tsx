import Image from "next/image";

import Link from "next/link";

interface LogoProps {
  type: "purple" | "default";
}

export function Logo({ type }: LogoProps) {
  if (type === "purple") {
    return (
      <a href="/">
        <Image
          src="/images/logo-purple.svg"
          alt="Logo Candy Show."
          width="120"
          height="52"
        />
      </a>
    );
  }

  return (
    <a href="/">
      <Image
        src="/images/logo.svg"
        alt="Logo Candy Show."
        width="120"
        height="52"
      />
    </a>
  );
}
