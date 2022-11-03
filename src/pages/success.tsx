import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Image from "next/image";

type SuccessProps = {
  sessionID: string;
};

type SuccessData = {
  costumerName: string;
  product: {
    imageUrl: string;
    name: string;
  };
};

const Success: NextPage<SuccessProps> = ({ sessionID }) => {
  const [successData, setSuccessData] = useState({} as SuccessData);

  const fetchSession = async (): Promise<void> => {
    try {
      const response = await axios.get("/api/success", {
        params: {
          sessionID,
        },
      });
      console.log(response.data);
      setSuccessData(response.data);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <SuccessContainer>
      <h1>Success!</h1>

      <ImageContainer>
        {/* {successData.product?.imageUrl && (
          <Image
            src={successData.product?.imageUrl}
            width={120}
            height={110}
            alt={successData.product?.name}
          />
        )} */}
      </ImageContainer>

      <p>
        Uhuu! <strong>{successData.costumerName}</strong>, your{" "}
        <strong>{successData.product?.name}</strong> will be in your home soon!
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
 