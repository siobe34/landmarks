import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";


// * Configuring Font Awesome
fontAwesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
