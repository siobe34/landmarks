import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

import { Navbar } from "../components/Navbar/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

// * Configuring Font Awesome
fontAwesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <div className='app'>
            <ScrollToTop />
            <Navbar className='relative flex justify-between items-center text-txtOnBg bg-bg2' />
            <AnimatePresence mode='wait' key={router.route}>
                <motion.main
                    className='flex flex-col justify-start items-center text-txtOnBg bg-bg1'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }}
                >
                    <Component {...pageProps} />
                </motion.main>
            </AnimatePresence>
        </div>
    );
}

export default MyApp;
