import Image from "next/image";

interface LogoProps {
  type: "purple" | "default";
}

export function Logo({ type }: LogoProps) {
  if (type === "purple") {
    return (
      <Image
        src="/images/logo-purple.svg"
        alt="Logo Candy Show."
        width="120"
        height="52"
      />
    );
  }

  return (
    <Image
      src="/images/logo.svg"
      alt="Logo Candy Show."
      width="120"
      height="52"
    />
  );
}
