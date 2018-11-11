const path = require('path')
function resolve(url) {
    return path.resolve(__dirname, url)
}
module.exports = {
    devServer : {
        port : 7778,
        proxy: {
            '/wb': {
                target: 'https://m.weibo.cn/api/',
                changeOrigin: true,
                pathRewrite: {
                '^/wb': ''
                }
            }
        }
    },
    chainWebpack  (config)  {
        config
        .resolve 
        .alias
        .set('@css', resolve('src/css'))
        .set('@c', resolve('src/components'))
        // .set('@lib',resolve('src/lib'))
        // .set("@page",resolve("src/pages"))
        .set("@util",resolve("src/util"))
    }
   
}