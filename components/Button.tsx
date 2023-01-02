import Link from "next/link";

import { IButton } from "../types/IButton";

const buttonUtils = `inline-flex justify-center items-center py-2 px-4 border border-secondary hover:border-primary rounded text-txtOnPrimary hover:text-txtOnSecondary bg-primary hover:bg-secondary cursor-pointer`;

export const Button = ({ className, styleOverride, children, onClick, href, hrefInternal, ariaLabel }: IButton) => {
    if (hrefInternal)
        return (
            <Link className={`${className} ${buttonUtils}`} style={styleOverride} href={hrefInternal} onClick={onClick} aria-label={ariaLabel}>
                {children}
            </Link>
        );
    if (href)
        return (
            <a className={`${className} ${buttonUtils}`} style={styleOverride} href={href} onClick={onClick} aria-label={ariaLabel}>
                {children}
            </a>
        );
    return (
        <button className={`${className} ${buttonUtils}`} style={styleOverride} onClick={onClick} aria-label={ariaLabel}>
            {children}
        </button>
    );
};
