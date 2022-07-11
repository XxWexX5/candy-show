import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";

import { client } from "../../lib/apollo";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import theme from "../../styles/theme-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
