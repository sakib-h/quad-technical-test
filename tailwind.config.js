/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#fefefe",
                "primary-bg": "#eeeff0",
                "primary-text": "#11263c",
                secondary: "#fd6011",
            },
            fontFamily: {
                dmSans: ["var(--font-dmSans)"],
                baloo: ["var(--font-baloo)"],
            },
        },
    },
    plugins: [],
};
