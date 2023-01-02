import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/components/Layout.module.css";
import { ILayout } from "../types/ILayout";

import { Navbar } from "./Navbar/Navbar";
import { ScrollToTop } from "./ScrollToTop";

export const Layout = ({ children }: ILayout) => {
    const router = useRouter();

    return (
        <AnimatePresence mode='wait' key={router.route}>
            <div className={styles.grid}>
                <ScrollToTop />
                <Navbar className='relative flex justify-between items-center text-txtOnBg bg-bg2' />
                <motion.main
                    className='flex flex-col justify-start items-center text-txtOnBg bg-bg1'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }}
                >
                    {children}
                </motion.main>
            </div>
        </AnimatePresence>
    );
};
