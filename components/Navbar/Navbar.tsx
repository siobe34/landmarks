import { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { INavbar } from "../../types/INavbar";

import { Navlink } from "./Navlink";
import { ThemeToggler } from "../ThemeToggler";

// * Array to store hrefs and names of website pages for cleaner HTML below
const SitePages = [
    { href: "/", name: "Home" },
    { href: "/map", name: "Map" },
    { href: "/about", name: "About" },
];

export const Navbar = ({ className }: INavbar) => {
    // * State of Mobile Menu
    const [menuActive, setMenuActive] = useState<boolean>(false);

    return (
        <nav className={className}>
            {/* Logo */}
            <Link className='ml-8' href='/' onClick={() => setMenuActive(false)}>
                Logo
            </Link>

            {/* Site Navigation Links */}
            <motion.ul
                className={`absolute md:static top-full ${
                    menuActive ? "flex" : "hidden"
                } md:flex flex-col md:flex-row justify-center md:flex-end items-center md:gap-8 md:mr-8 w-full md:w-auto pb-4 md:p-0 text-txtOnBg bg-bg2 md:bg-inherit border-b md:border-0 border-bg3 z-20`}
                layout
            >
                {SitePages.map((link) => (
                    <Navlink key={link.href} href={link.href} onClick={() => setMenuActive(false)}>
                        {link.name}
                    </Navlink>
                ))}
                <ThemeToggler />
            </motion.ul>

            {/* Mobile Menu Button */}
            <motion.button
                className='flex md:hidden text-base mr-8'
                type='button'
                aria-label='Mobile Menu'
                onClick={() => setMenuActive(!menuActive)}
                whileHover={{ opacity: 0.5 }}
                whileTap={{ rotate: 360 }}
            >
                <FontAwesomeIcon icon={menuActive ? faX : faBars} />
            </motion.button>
        </nav>
    );
};
