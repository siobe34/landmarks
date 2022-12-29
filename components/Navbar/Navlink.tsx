import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { INavlink } from "../../types/INavlink";

export const Navlink = ({ href, onClick, children }: INavlink) => {
    const router = useRouter();

    // * State for showing link as hovered or not
    const [hover, setHover] = useState<boolean>(() => router.route === href && true);

    // * Function to toggle hover state of link when hovered
    const toggleLinkHover = (state: boolean) => {
        setHover(state);
        if (router.route === href) setHover(true);
    };

    return (
        <li
            className='flex justify-center items-center h-12 md:h-auto w-full md:W-auto cursor-pointer whitespace-nowrap'
            onMouseEnter={() => toggleLinkHover(true)}
            onMouseLeave={() => toggleLinkHover(false)}
        >
            <Link href={href} onClick={onClick}>
                {children}
                <span className={`flex h-0.5 ${hover ? "w-full" : "w-0"} bg-primary transition-[width] ease-in-out`} aria-hidden='true' />
            </Link>
        </li>
    );
};
