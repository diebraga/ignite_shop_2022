import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header/Header";
import { useState } from "react";

import "react-modern-drawer/dist/index.css";

import dynamic from "next/dynamic";
import { ProductType } from ".";
import { formatPrice } from "../styles/utils/formatPrice";

const Drawer = dynamic(() => import("../components/Drawer/Drawer"), {
  ssr: false,
});

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const [bag, setBag] = useState<ProductType[]>([]);
  const [bagCount, setCount] = useState(0);
  const [sumTotalPrice, setSumTotalPrice] = useState(0);
  console.log(bag);

  console.log(formatPrice(sumTotalPrice));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen((prevState) => !prevState);
    setCount(0);
  };

  const addToBag = (item: ProductType) => {
    setCount((prev) => prev + 1);
    setSumTotalPrice((prev) => prev + item.rawPrice);
    setBag((prev) => [
      ...prev,
      {
        ...item,
        key: bag.length,
      },
    ]);
  };

  return (
    <Container>
      <Drawer
        drawerIsOpen={drawerIsOpen}
        toggleDrawer={toggleDrawer}
        bag={bag}
        totalPrice={formatPrice(sumTotalPrice)}
      />
      <Header toggleDrawer={toggleDrawer} bagCount={bagCount} />
      <Component {...pageProps} addToBag={addToBag} />
    </Container>
  );
}

export default MyApp;
