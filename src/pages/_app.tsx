import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image width={150} height={150} src="/logo.svg" alt=""/>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
