import * as Styles from "./styles";

import Image from "next/image";

interface ProductCheckoutProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  olderPrice: number;
  price: number;
  amount: number;
}

export function ProductCheckout({
  title,
  imageSrc,
  imageAlt,
  olderPrice,
  price,
  amount,
}: ProductCheckoutProps) {
  return (
    <Styles.WrapperProductCheckout className="wrapper-product-checkout">
      <section>
        <header>
          <h3 className="title">{title}</h3>
        </header>

        <main>
          <div className="container-image-product">
            <Image src={imageSrc} alt={imageAlt} layout="fill" />
          </div>

          <div className="wrapper-price">
            <header>
              <p className="text">Cada</p>

              <p className="older-price">
                {olderPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </header>

            <main>
              <p className="value">
                {price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </main>
          </div>

          <div className="wrapper-amount">
            <label className="title" htmlFor="amount">
              Quantidade
            </label>

            <input
              type="number"
              id="amount"
              defaultValue="0"
              min="1"
              max="99"
            />
          </div>

          <div className="wrapper-total">
            <header>
              <p className="text">Total</p>
            </header>

            <main>
              <p className="value">R$ 303,00</p>
            </main>
          </div>
        </main>
      </section>

      <aside>
        <div className="container-image">
          <Image
            src="/images/icon-trash.svg"
            alt="Product"
            width={156}
            height={72}
          />
        </div>
      </aside>
    </Styles.WrapperProductCheckout>
  );
}