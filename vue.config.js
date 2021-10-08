const path = require("path");
module.exports = {
  lintOnSave: "warning",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "src/assets/style/variable.less"),
        path.resolve(__dirname, "src/assets/style/mixin.less")
      ]
    }
  },
  publicPath: '/homepage',
  outputDir: "server/dist",
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "健康书院服务平台",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         // 设计稿宽度的1/10，根据原型图给出的尺寸标注来。我这里的原型图总宽度是375
  //         px2rem({ remUnit: 37.5 }),
  //       ],
  //     },
  //   },
  // },
  //
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 75, //换算基数， 默认100
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 6 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    }
  },
};