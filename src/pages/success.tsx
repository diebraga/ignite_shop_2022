import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Image from "next/image";

type SuccessProps = {
  sessionID: string;
  emptyBag: () => void;
};

type SuccessData = {
  costumerName: string;
  products: {
    image: string;
    productName: string;
  }[];
};

const Success: NextPage<SuccessProps> = ({ sessionID, emptyBag }) => {
  const [successData, setSuccessData] = useState({} as SuccessData);

  const fetchSession = async (): Promise<void> => {
    try {
      const response = await axios.get("/api/success", {
        params: {
          sessionID,
        },
      });
      setSuccessData(response.data);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    fetchSession();
    emptyBag();
  }, []);

  return (
    <SuccessContainer>
      <h1>Success!</h1>

      <ImageContainer>
      </ImageContainer>

      <p>
        Uhuu! <strong>{successData?.costumerName}</strong>, your{" "}
        <strong>Your {successData.products?.length} T-shirts</strong> are going to be in your home
        soon!
      </p>

      <Link href="/">Buy more</Link>
    </SuccessContainer>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionID = query.session_id as string;

  return {
    props: {
      sessionID,
    },
  };
};
