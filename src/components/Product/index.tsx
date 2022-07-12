import { useState, useEffect } from "react";

import * as Styles from "./styles";

import Image from "next/image";

interface ProductProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  olderPrice: number;
  price: number;
  setAmount: any;
  cart: any;
  handleCart: any;
}

interface Cart {
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
  setAmount,
  cart,
  handleCart,
}: ProductProps) {
  const [countAmount, setCountAmount] = useState(0);

  useEffect(() => {
    setAmount([countAmount]);
  }, [countAmount]);

  function handleAmount(operation: string, product: Cart) {
    if (operation === "plus") {
      if (countAmount < 99) {
        handleCart(product);
        setCountAmount(countAmount + 1);
      }
    }

    if (operation === "less") {
      if (countAmount > 0) {
        setCountAmount(countAmount - 1);
      }
    }
  }

  return (
    <Styles.ContainerProduct>
      <Styles.WrapperProduct>
        <div className="container-image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="image-product"
            layout="fill"
          />
        </div>
        <Styles.Title className="title">{title}</Styles.Title>
        <Styles.WrapperPrice>
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
        </Styles.WrapperPrice>

        <Styles.WrapperButton
          onClick={() =>
            handleAmount("plus", {
              imageSrc: imageSrc,
              imageAlt: imageAlt,
              title: title,
              olderPrice: olderPrice,
              price: price,
            })
          }
        >
          <div className="container-image">
            <Image
              src="/images/icon-cart-white.svg"
              alt="Product."
              layout="fill"
            />
          </div>

          <span className="text">Adicionar ao carrinho</span>
        </Styles.WrapperButton>
      </Styles.WrapperProduct>

      <Styles.ControlAmount>
        <button
          className="button-less"
          onClick={() =>
            handleAmount("less", {
              imageSrc: imageSrc,
              imageAlt: imageAlt,
              title: title,
              olderPrice: olderPrice,
              price: price,
            })
          }
        >
          -
        </button>

        <span className="value">{countAmount}</span>

        <button
          className="button-plus"
          onClick={() =>
            handleAmount("plus", {
              imageSrc: imageSrc,
              imageAlt: imageAlt,
              title: title,
              olderPrice: olderPrice,
              price: price,
            })
          }
        >
          +
        </button>
      </Styles.ControlAmount>
    </Styles.ContainerProduct>
  );
}
