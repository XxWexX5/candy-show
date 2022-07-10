import type { NextPage } from "next";

import Head from "next/head";
import { Checkout } from "../components/Checkout";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductCheckout } from "../components/ProductCheckout";

import * as Styles from "../styles/cart";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Candy Show</title>
        <meta
          name="description"
          content="Candy Show. Your new place to buy your happiness!"
        />
        <meta
          property="og:description"
          content="Candy Show. Your new place to buy your happiness!"
        />
        <meta property="og:title" content="Candy Show" />
        <meta property="og:type" content="e-commerce" />
        <meta property="og:image" content="/images/image-candy.jpg" />
        <meta
          property="og:url"
          content="https://candy-show-4h298zuii-xxwexx5.vercel.app"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Styles.Cart>
        <Header />

        <div className="container container-main">
          <div className="wrapper-products-checkout no-overflow">
            <ProductCheckout
              title="Trufa BENDITO CACAU 55% CACAU 30 G"
              imageSrc="/images/product.png"
              imageAlt="Product"
              olderPrice={310}
              price={303}
              amount={2}
            />
          </div>

          <Checkout total={200} />
        </div>

        <Footer />
      </Styles.Cart>
    </>
  );
};

export default Cart;
