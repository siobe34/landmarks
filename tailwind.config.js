// * Function to retain the opacity value for elements using custom theme variables
function withOpacity(cssVariable) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(${cssVariable}, ${opacityValue})`;
        }
        return `rgb(${cssVariable})`;
    };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg1: withOpacity("var(--bg1)"),
                bg2: withOpacity("var(--bg2)"),
                bg3: withOpacity("var(--bg3)"),
                txtOnBg: withOpacity("var(--txtOnBg)"),
                primary: withOpacity("var(--primary)"),
                txtOnPrimary: withOpacity("var(--txtOnPrimary)"),
                secondary: withOpacity("var(--secondary)"),
                txtOnSecondary: withOpacity("var(--txtOnSecondary)"),
            },
        },
    },
    plugins: [],
};
