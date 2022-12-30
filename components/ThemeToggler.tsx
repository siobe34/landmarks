import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { ITheme } from "../types/ITheme";

export const ThemeToggler = () => {
    // * State to store the currently selected theme
    const [currentTheme, setCurrentTheme] = useState<ITheme["theme"]>("light");

    const toggleTheme = () => {
        if (currentTheme === "light") {
            // * Set class 'dark' on document element
            document.documentElement.classList.add("dark");
            setCurrentTheme("dark");

            // * Set dark theme in Local Storage
            window.localStorage.setItem("nextjs-app-theme", "dark");
        }

        if (currentTheme === "dark") {
            setCurrentTheme("light");
            // * Remove class 'dark' from document element
            document.documentElement.classList.remove("dark");

            // * Set light theme in Local Storage
            window.localStorage.setItem("nextjs-app-theme", "light");
        }
    };

    useEffect(() => {
        // * Get stored theme from Local Storage
        const storedTheme = window.localStorage.getItem("nextjs-app-theme") as ITheme["theme"];
        const preferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        //* 1. Check if local storage has a saved theme
        //* Theme is dark mode
        if (storedTheme && storedTheme === "dark") {
            // * Set class 'dark' on document element and set 'dark' theme state
            document.documentElement.classList.add("dark");
            setCurrentTheme("dark");
        }
        //* Theme is light mode
        if (storedTheme && storedTheme === "light") {
            // * Remove potential 'dark' from document element and set 'light' theme state
            document.documentElement.classList.remove("dark");
            setCurrentTheme("light");
        }
        //* 2. If no theme exists then check media queries for user-prefers-theme
        //* Media query matches dark mode
        if (!storedTheme && preferDarkTheme) {
            // * Set class 'dark' on document element and set 'dark' theme state
            document.documentElement.classList.add("dark");
            setCurrentTheme("dark");
        }
        //* Media query does not match dark mode
        if (!storedTheme && !preferDarkTheme) {
            // * Remove class 'dark' on document element and set 'light' theme state
            document.documentElement.classList.remove("dark");
            setCurrentTheme("light");
        }
        //* 3. If a saved theme and a media query BOTH exists then use the saved theme
        //* This case is already handled by code above
    }, []);

    return (
        <button
            type='button'
            aria-label='Toggle Site Theme'
            className='relative flex justify-center items-center gap-6 py-2 px-[0.8rem] border border-secondary hover:border-primary rounded-2xl text-txtOnPrimary hover:text-txtOnSecondary bg-primary hover:bg-secondary text-base cursor-pointer'
            onClick={() => toggleTheme()}
        >
            <motion.span
                className={`absolute ${currentTheme === "light" ? "right-3" : "left-3"} flex justify-center items-center h-4 w-4 bg-inherit z-[2]`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                layout
            >
                <FontAwesomeIcon icon={faCircleHalfStroke} flip={currentTheme === "dark" ? "vertical" : "horizontal"} />
            </motion.span>
            <FontAwesomeIcon className='text-sm pointer-events-none' icon={faMoon} />
            <FontAwesomeIcon className='text-sm pointer-events-none' icon={faSun} color='#f2f28d' />
        </button>
    );
};
