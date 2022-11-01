import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header/Header";
import { useState } from "react";

import "react-modern-drawer/dist/index.css";
import { Drawer } from "../components/Drawer/Drawer";
import { ProductType } from "./api/success";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const [bag, setBag] = useState<ProductType[]>([]);
  const [bagCount, setCount] = useState(0);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen((prevState) => !prevState);
    setCount(0);
  };

  const addToBag = (item: ProductType) => {
    setCount((prev) => prev + 1);
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
        // @ts-ignore *
        bag={bag}
      />
      <Header toggleDrawer={toggleDrawer} bagCount={bagCount} />
      <Component {...pageProps} addToBag={addToBag} />
    </Container>
  );
}

export default MyApp;
