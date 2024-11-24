const webpack = require("webpack");

// https://github.com/facebook/create-react-app/issues/11889#issuecomment-1114928008
function getFileLoaderRule(rules) {
  for (const rule of rules) {
    if ("oneOf" in rule) {
      const found = getFileLoaderRule(rule.oneOf);
      if (found) {
        return found;
      }
    } else if (rule.test === undefined && rule.type === 'asset/resource') {
      return rule;
    }
  }
}

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    vm: require.resolve("vm-browserify"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    timers: require.resolve("timers-browserify"),
    path: require.resolve("path-browserify"),
    buffer: require.resolve("buffer"),
    util: require.resolve("util/"),
    assert: false, // require.resolve("assert") can be polyfilled here if needed
    http: false, // require.resolve("stream-http") can be polyfilled here if needed
    https: false, // require.resolve("https-browserify") can be polyfilled here if needed
    os: false, // require.resolve("os-browserify") can be polyfilled here if needed
    url: false, // require.resolve("url") can be polyfilled here if needed
    zlib: false, // require.resolve("browserify-zlib") can be polyfilled here if needed
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  config.ignoreWarnings = [/Failed to parse source map/];
  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: "pre",
    loader: require.resolve("source-map-loader"),
    resolve: {
      fullySpecified: false,
    },
  });

  const fileLoaderRule = getFileLoaderRule(config.module.rules);
  if (!fileLoaderRule) {
    throw new Error("File loader not found");
  }
  fileLoaderRule.exclude.push(/\.cjs$/);

  return config;
};