import type { NextPage } from "next";
import Head from "next/head";

import * as styled from "../styles/styles";

import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from "react";

import { Logo } from "../components/Logo";
import { Cart } from "../components/Cart";

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
        <h1>Hello World!</h1>

        <BsYoutube />
        <BsFacebook />
        <AiFillInstagram />

        <Logo type="default" />
        <Cart amount={2} value={2.55} />
      </styled.App>
    </>
  );
};

export default Home;
