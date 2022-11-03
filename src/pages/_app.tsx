import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header/Header";
import { useState } from "react";

import "react-modern-drawer/dist/index.css";

import dynamic from "next/dynamic";
import { ProductType } from ".";
import { formatPrice } from "../utils/formatPrice";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Drawer = dynamic(() => import("../components/Drawer/Drawer"), {
  ssr: false,
});

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const [bag, setBag] = useLocalStorage<ProductType[]>("bag:ignite:shop", []);
  const [bagCount, setCount] = useLocalStorage<number>(
    "bag:count:ignite:shop",
    0
  );
  const [sumTotalPrice, setSumTotalPrice] = useLocalStorage<number>(
    "bag:sum:price:ignite:shop",
    0
  );

  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setDrawerIsOpen((prevState) => !prevState);
    setCount(0);
  };

  const addToBag = (item: ProductType): void => {
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

  const removeFromBag = (key: number, rawPrice: number): void => {
    setSumTotalPrice((prev) => prev - rawPrice);
    setBag(bag.filter((item) => item.key !== key));
  };

  return (
    <Container>
      <Drawer
        drawerIsOpen={drawerIsOpen}
        toggleDrawer={toggleDrawer}
        bag={bag}
        totalPrice={formatPrice(sumTotalPrice)}
        removeFromBag={removeFromBag}
      />
      <Header toggleDrawer={toggleDrawer} bagCount={bagCount} />
      <Component {...pageProps} addToBag={addToBag} />
    </Container>
  );
}

export default MyApp;
