module.exports = {
  publicPath: "./",
  configureWebpack: {
    output: {
      filename: "js/cxdashboard.js"
    },
    /*
    module: {
      rules: [
        {
          test: /\.json$/,
          include: [path.resolve(__dirname, "src", "assets", "i18n")],
          use: ["banana-i18n-loader"]
        }
      ]
    },*/
    optimization: {
      splitChunks: {
        cacheGroups: {
          libs: {
            test: /[\\/]node_modules[\\/]/,
            name: "cxdashboard.libs",
            chunks: "all"
          }
        }
      }
    }
  }
};
