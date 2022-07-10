import type { NextPage } from "next";
import Head from "next/head";

import * as styled from "../styles/styles";

import { useEffect } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Product } from "../components/Product";
import { Checkout } from "../components/Checkout";
import { ProductCheckout } from "../components/ProductCheckout";

const Home: NextPage = () => {
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.todos);
      })
      .catch((e) => {
        console.error(e.message);
      });
  });

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

      <styled.App>
        <Header />

        <Product
          imageSrc="/images/product.png"
          imageAlt="Product"
          title="Trufa BENDITO CACAU 55% CACAU 30 G"
          olderPrice={310}
          price={303}
        />

        <Footer />
      </styled.App>
    </>
  );
};

export default Home;
