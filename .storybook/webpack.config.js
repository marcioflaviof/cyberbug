const { resolve } = require("path");

module.exports = ({ config }) => {
  // Add SVGR Loader
  // ========================================================
  // Remove svg rules from existing webpack rule

  // modify storybook's file-loader rule to avoid conflicts with svgr
  // Mirror project aliases
  // ========================================================
  config.resolve.alias["@config"] = resolve(__dirname, "../src/config");
  config.resolve.alias["@atoms"] = resolve(
    __dirname,
    "../src/components/atoms"
  );
  config.resolve.alias["@molecules"] = resolve(
    __dirname,
    "../src/components/molecules"
  );
  config.resolve.alias["@organisms"] = resolve(
    __dirname,
    "../src/components/organisms"
  );

  return config;
};
