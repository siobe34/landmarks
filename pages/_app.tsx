import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

import { Layout } from "../components/Layout";

// * Configuring Font Awesome
fontAwesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
