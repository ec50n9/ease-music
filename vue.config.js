const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Users/ec50n9/WebstormProjects/ease-music/dist/'
    : '/',
  devServer: {
    proxy: {
      "/api": {
        target: "https://netease-cloud-music-api-livid-seven.vercel.app",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
