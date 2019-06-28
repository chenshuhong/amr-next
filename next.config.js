const path = require('path')
const withLess = require('@zeit/next-less')
module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    
    console.log(config.module.rules,defaultLoaders)
    // 目录别名配置
    Object.assign(config.resolve.alias,{
      'components': path.join(__dirname, 'components'),
    })
    return config
  },
})
