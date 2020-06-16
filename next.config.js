// next.config.js
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

const isProduction = process.env.NODE_ENV === "production";

module.exports = withFonts(
  withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: isProduction
        ? "[hash:base64:5]"
        : "[name]__[local]___[hash:base64:5]",
    },
  })
);
