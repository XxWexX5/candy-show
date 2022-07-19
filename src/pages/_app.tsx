import type { AppProps } from "next/app";

import { CartContextProvider } from "../contexts/CartContext";

import { ApolloProvider } from "@apollo/client";

import { client } from "../../lib/apollo";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import theme from "../../styles/theme-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </ApolloProvider>
    </CartContextProvider>
  );
}

export default MyApp;
