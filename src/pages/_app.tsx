import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src="/logo.svg" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
