
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}


module.exports = {
    devServer: {
      port: 8000,
      proxy: {
        '/jucheng' : {
          target: 'https://m.juooo.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/jucheng' : ''
          }
        }
      }
    },
    chainWebpack  (config)  {
       config
            .resolve
            .alias
            .set('@css', resolve('src/css'))
            .set('@libs', resolve('src/libs'))
            .set('@util', resolve('src/util'))
            .set('@c', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            
    }
}