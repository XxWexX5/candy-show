import type { NextPage } from "next";
import Head from "next/head";
import { useState, useContext } from "react";

import products from "../data/products.js";

import { CartContext } from "../contexts/CartContext";

import { gql, useQuery } from "@apollo/client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import * as styled from "../../styles/styles";

import * as Styles from "../../styles/cart";

import { useEffect } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Product } from "../components/Product";
import { ProductCheckout } from "../components/ProductCheckout";
import { Checkout } from "../components/Checkout";

const GET_PRODUCTS_QUERY = gql`
  query {
    products {
      data {
        id
        attributes {
          imageUrl
          name
          price
          sellingPrice
        }
      }
    }
  }
`;

interface Product {
  id: string;
  attributes: {
    imageUrl: string;
    name: string;
    price: number;
    sellingPrice: number;
    amount: number;
  };
}

interface Cart {
  imageSrc: string;
  imageAlt: string;
  title: string;
  olderPrice: number;
  price: number;
  amount: number;
}

const Home: NextPage = () => {
  const { cart } = useContext(CartContext);
  let total = 0;

  function compare(a: Cart, b: Cart) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  const cartOrderByTitle = cart.sort(compare);

  cart.map((product: Cart) => {
    total += product.price * product.amount;
  });

  // const { data } = useQuery(GET_PRODUCTS_QUERY);

  /*
  if (data) {
    products = data.products.data;
    console.log(products);
  }*/

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

        <div className="container">
          <div className="wrapper-products">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1700: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
            >
              {!products && <p>Carregando...</p>}

              {products &&
                products.map((product: Product) => (
                  <SwiperSlide key={product.id}>
                    <Product
                      imageSrc={product.attributes.imageUrl}
                      imageAlt={product.attributes.name}
                      title={product.attributes.name}
                      olderPrice={product.attributes.price}
                      price={product.attributes.sellingPrice}
                      amount={product.attributes.amount}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <Styles.Cart>
          <div className="container container-main">
            <div
              className={`wrapper-products-checkout ${
                cart.length > 1 ? "" : "no-overflow"
              }`}
            >
              {cartOrderByTitle.map((productCart: Cart, index) => (
                <ProductCheckout
                  key={index}
                  title={productCart.title}
                  imageSrc={productCart.imageSrc}
                  imageAlt={productCart.imageAlt}
                  olderPrice={productCart.olderPrice}
                  price={productCart.price}
                  amount={productCart.amount}
                />
              ))}
            </div>

            <Checkout total={total} />
          </div>
        </Styles.Cart>

        <Footer />
      </styled.App>
    </>
  );
};

export default Home;
