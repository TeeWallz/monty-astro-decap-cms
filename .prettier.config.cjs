module.exports = {
  plugins: [
    require.resolve("prettier-plugin-tailwindcss", "prettier-plugin-astro"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
