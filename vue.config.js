// vue.config.js
const vueConfig = {
  outputDir: 'docs',
  publicPath: './'
  // publicPath: process.env.VUE_APP_BASE_URL, // 前端资源访问根目录， 可配置到cdn目录下。 建议使用命令行环境变量进行替换。
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         'primary-color': '#3A72E8',
  //         'link-color': '#1A79FF',
  //         'border-radius-base': '4px',
  //         'layout-header-height': '50px',
  //       },
  //       javascriptEnabled: true,
  //     },
  //     sass: {
  //       // prependData: '@import "./src/styles/entry.scss";',
  //       additionalData: '@import "./src/styles/entry.scss";',
  //     },
  //   },
  // },

  // devServer: {
  //   // development server port 8000
  //   port: 8080,
  //   // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
  //       target: process.env.VUE_APP_API_SERVER_URL,
  //       ws: false,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },

  // disable source map in production
  // productionSourceMap: false,
  // lintOnSave: undefined,
  // // babel-loader no-ignore node_modules/*
  // transpileDependencies: [],
}

module.exports = vueConfig
