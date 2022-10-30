import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

const Success: NextPage = () => {
  return (
    <SuccessContainer>
      <h1>Success!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuu! <strong>user</strong>, your <strong>Product</strong> will be in
        your home soon!
      </p>

      <Link href="/">Buy more</Link>
    </SuccessContainer>
  );
};

export default Success;
