import type { NextPage } from "next";
import Head from "next/head";
import { useState, useContext } from "react";

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
  let products = [
    {
      id: "1",
      attributes: {
        __typename: "Product",
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
        name: "Trufa BENDITO CACAU 55% CACAU 30 G",
        price: 303,
        sellingPrice: 273,
        amount: 0,
      },
    },
    {
      id: "2",
      attributes: {
        __typename: "Product",
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000",
        name: "TRUFA MORANGO",
        price: 123,
        sellingPrice: 111,
        amount: 0,
      },
    },
    {
      id: "3",
      attributes: {
        __typename: "Product",
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000",
        name: "TRUFA TRADICIONAL 30 G",
        price: 303,
        sellingPrice: 273,
        amount: 0,
      },
    },
    {
      id: "4",
      attributes: {
        __typename: "Product",
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159957-800-1029/trufa-coco.png?v=636929369885800000",
        name: "TRUFA DE COCO 30 G",
        price: 303,
        sellingPrice: 273,
        amount: 0,
      },
    },
    {
      id: "5",
      attributes: {
        __typename: "Product",
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159993-800-1029/trufa-branco.png?v=636945743710500000",
        name: "TRUFA BRANCO 30G",
        price: 110,
        sellingPrice: 99,
        amount: 0,
      },
    },
    {
      id: "6",
      attributes: {
        __typename: "Product",
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159941-800-1029/mezzo.png?v=636916443729870000",
        name: "TRUFA MEZZO 30 G",
        price: 303,
        sellingPrice: 273,
        amount: 0,
      },
    },
    {
      id: "7",
      attributes: {
        __typename: "Product",
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159936-800-1029/Trufa-Morango-e-Maracuja.png?v=636915614811230000",
        name: "TRUFA MORANGO E MARACUJÁ 13,5 G",
        price: 110,
        sellingPrice: 99,
        amount: 0,
      },
    },
  ];

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
