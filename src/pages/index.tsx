import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomeContainer, HomeProduct } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import "keen-slider/keen-slider.min.css";

type ProductType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number | null;
};

type HomeProps = {
  products: ProductType[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <HomeProduct key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </HomeProduct>
          );
        })}
      </HomeContainer>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
