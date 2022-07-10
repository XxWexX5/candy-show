import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import theme from "../../styles/theme-styles";

import { Server } from "miragejs";

new Server({
  routes() {
    this.namespace = "api";

    this.get("/todos", () => {
      return {
        todos: [
          { id: "1", text: "Buy groceries", isDone: true },
          { id: "2", text: "Walk the dog", isDone: false },
        ],
      };
    });
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
