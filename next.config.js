const withLess = require('@zeit/next-less')
module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]___[hash:base64:5]",
  }
})
