const path = require("path");
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config) => {
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, "..")],
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")],
            },
          },
          require.resolve("react-docgen-typescript-loader"),
        ],
      },
    ]),
      config.resolve.extensions.push(".ts", ".tsx");

    const scopePluginIndex = config.resolve.plugins.findIndex(
      ({ constructor }) =>
        constructor && constructor.name === "ModuleScopePlugin"
    );

    config.resolve.plugins.splice(scopePluginIndex, 1);

    return config;
  },
};
