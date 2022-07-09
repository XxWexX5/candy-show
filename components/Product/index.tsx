import * as Styled from "./styles";

import Image from "next/image";

interface ProductProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  olderPrice: number;
  price: number;
}

export function Product({
  imageSrc,
  imageAlt,
  title,
  olderPrice,
  price,
}: ProductProps) {
  return (
    <Styled.ContainerProduct>
      <Styled.WrapperProduct>
        <div className="container-image">
          <Image src={imageSrc} alt={imageAlt} width="156" height="72" />
        </div>

        <Styled.Title className="title">{title}</Styled.Title>

        <Styled.WrapperPrice>
          <div className="older-price">
            {olderPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "BRL",
            })}
          </div>

          <div className="price">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </Styled.WrapperPrice>

        <Styled.WrapperButton>
          <div className="container-image">
            <Image
              src="/images/icon-cart-white.svg"
              alt="Product."
              width="18"
              height="13"
            />
          </div>

          <span className="text">Adicionar ao carrinho</span>
        </Styled.WrapperButton>
      </Styled.WrapperProduct>

      <Styled.ControlAmount>
        <button className="button-less">-</button>

        <span className="value">0</span>

        <button className="button-plus">+</button>
      </Styled.ControlAmount>
    </Styled.ContainerProduct>
  );
}
