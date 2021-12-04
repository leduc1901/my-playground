import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Transition } from "@react-spring/core";
import { a as animate } from "@react-spring/web";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const items = [
    {
      id: pathname,
      Component,
      pageProps,
    },
  ];

  return (
    <Transition
      items={items}
      keys={(item: any) => item.id}
      initial={{ opacity: 0 }}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0, position: "absolute" }}
    >
      {(styles, { pageProps, Component }) => (
        <animate.div style={{ ...styles, overflow: "hidden" }}>
          <Component {...pageProps} />
        </animate.div>
      )}
    </Transition>
  );
}

export default MyApp;
