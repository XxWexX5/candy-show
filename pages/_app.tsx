import "../styles/globals.css";
import type { AppProps } from "next/app";

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
  return <Component {...pageProps} />;
}

export default MyApp;
