import React from "react";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

const Product: React.FC = () => {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>45.00</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus voluptate nesciunt earum libero molestias temporibus
          sequi in possimus dolor error atque, voluptates velit similique, a eum
          ad voluptatum fugit repellat!
        </p>
        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;
