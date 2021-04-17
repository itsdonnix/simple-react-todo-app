/** @type {typeof import('tailwindcss/stubs/defaultConfig.stub')} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
  },
  purge: {
    content: ["./index.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
