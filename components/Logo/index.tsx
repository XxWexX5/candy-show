import Image from "next/image";

interface LogoProps {
  type: "purple" | "default";
}

export function Logo({ type }: LogoProps) {
  console.log(type);

  if (type === "purple") {
    return (
      <Image
        src="/images/logo-purple.svg"
        alt="Logo Candy Show."
        width="124"
        height="56"
      />
    );
  }

  return (
    <Image
      src="/images/logo.svg"
      alt="Logo Candy Show."
      width="124"
      height="56"
    />
  );
}