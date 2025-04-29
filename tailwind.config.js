/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                bgMain: "#1F1927",
                bgBtn: "#3AD2DC",
                textMain: "#97939C",
                textSecond: "#3AD2DC",
                navTabs: "#C1C0BF",
                btnText: "#346877",
            },
        },
    },
    plugins: [],
};

/*
BgMain #1F1927
BgBtn #3AD2DC
TextMain #97939C
TextSecond #3AD2DC
NavTabs #C1C0BF
BtnText #346877
*/
