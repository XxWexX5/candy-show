import type { NextPage } from "next";
import Head from "next/head";

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
              <SwiperSlide>
                <Product
                  imageSrc="/images/product.png"
                  imageAlt="Product"
                  title="Trufa BENDITO CACAU 55% CACAU 30 G"
                  olderPrice={310}
                  price={303}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imageSrc="/images/product.png"
                  imageAlt="Product"
                  title="Trufa BENDITO CACAU 55% CACAU 30 G"
                  olderPrice={310}
                  price={303}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imageSrc="/images/product.png"
                  imageAlt="Product"
                  title="Trufa BENDITO CACAU 55% CACAU 30 G"
                  olderPrice={310}
                  price={303}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imageSrc="/images/product.png"
                  imageAlt="Product"
                  title="Trufa BENDITO CACAU 55% CACAU 30 G"
                  olderPrice={310}
                  price={303}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imageSrc="/images/product.png"
                  imageAlt="Product"
                  title="Trufa BENDITO CACAU 55% CACAU 30 G"
                  olderPrice={310}
                  price={303}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <Styles.Cart>
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
        </Styles.Cart>

        <Footer />
      </styled.App>
    </>
  );
};

export default Home;
