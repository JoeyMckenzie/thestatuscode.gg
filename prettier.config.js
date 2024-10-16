import antlers from "prettier-plugin-antlers";

/** @type {import('prettier').Config} */
const config = {
    plugins: [antlers],
    overrides: [
        {
            files: ["*.antlers.html"],
            options: {
                parser: "antlers",
            },
        },
    ],
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
};

export default config;
