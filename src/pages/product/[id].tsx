import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Stripe from "stripe";
import { ProductType } from "..";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

type ProductProps = {
  product: ProductType;
  description: string;
};

const Product: NextPage<ProductProps> = ({ description, product }) => {
  const { isFallback } = useRouter();

  if (isFallback) return <h1>Loading...</h1>;
  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{description}</p>
        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Mf4WxgkrTu2kku" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productID = params?.id as string;

  const product = await stripe.products.retrieve(productID, {
    expand: ["default_price"],
  });
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "EUR",
        }).format((price.unit_amount as number) / 100),
      },
      description: product.description,
    },
    revalidate: 60 * 60 * 1,
  };
};
