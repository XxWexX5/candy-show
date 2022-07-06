import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
        <meta property="og:image" content="/image-candy.jpg" />
        <meta
          property="og:url"
          content="http://euro-travel-example.com/index.htm"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
    </>
  );
};

export default Home;
