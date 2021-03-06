const fs = require('fs')
const path = require('path')
const antdLessLoader = require("next-antd-aza-less")
const lessToJS = require('less-vars-to-js')

// Where your antd-custom.less file lives
const modifyVars = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './theme.less'), 'utf8')
)

module.exports = antdLessLoader({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    
    // 目录别名配置
    Object.assign(config.resolve.alias, {
      'components': path.join(__dirname, 'components'),
      'config': path.join(__dirname, 'config'),
      'utils': path.join(__dirname, 'utils'),
    })
    
    //antd 样式设置
    if (isServer) {
      const antStyles = /(antd\/.*?\/style.*?)/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
})
