// import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const myColors = {
    primary: {
        50: "#787969",
        100: "#979483",
        200: "#B5AC9E",
        300: "#D2C3B8",
        400: "#F0D9D3",
        500: "#F2D9D8",
        600: "#F5DEE2",
        700: "#F7E4EB",
        800: "#F9EAF2",
        900: "#FBF0F8",
        950: "#FDF6FC",
        bg: "#F0D9D3",
        text1: "#444444",
        text2: "#767676",
        text3: "#AAAAAA",
        text4: "#EEEEEE",
        divider: "#FFFFFF",
        tableHeaderBg: "#f2cfc6;",
    },
};

module.exports = withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: myColors.primary,
            },
            fontFamily: {
                notoSansJP: ["var(--font-noto-sans-jp)", "sans-serif"],
                notoSerifJP: ["var(--font-noto-serif-jp)", "serif"],
                bentham: ["var(--font-bentham)", "serif"],
            },
        },
    },

    plugins: [],
});
