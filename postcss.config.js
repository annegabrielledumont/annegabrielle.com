module.exports = {
  plugins: [
    require("postcss-normalize"),
    require("postcss-import"),
    require("postcss-typescale"),
    require("postcss-font-family-system-ui"),
    require("pixrem")({
      html: false
    }),
    require("postcss-grid-system"),
    require("postcss-grid-fluid"),
    require("postcss-button"),
    require("postcss-inline-svg"),
    require("postcss-color-mod-function"),
    require("postcss-preset-env")({
      stage: 0
    })
  ]
};
