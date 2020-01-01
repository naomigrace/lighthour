const merge = require("webpack-merge");

const common = require("./common/index");
const shared = require("../shared/index");

const toDist = shared["path"]["toDist"];
const port = shared["port"]["client"];
const eslint = shared["eslint"];

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    port,
    contentBase: toDist(),
    historyApiFallback: { disableDotRule: true },
    hot: true,
    compress: true,
    stats: "minimal",
    clientLogLevel: "error"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            cache: true,
            ...eslint
          }
        }
      }
    ]
  }
});
