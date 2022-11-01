import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header/Header";
import { useState } from "react";

import "react-modern-drawer/dist/index.css";
import { Drawer } from "../components/Drawer/Drawer";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Drawer drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer}/>
      <Header toggleDrawer={toggleDrawer}/>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
