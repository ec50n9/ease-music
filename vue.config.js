const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: "https://netease-cloud-music-api-livid-seven.vercel.app",
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    }
})
