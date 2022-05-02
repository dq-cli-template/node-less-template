module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    // stylelint-config-rational-order里面内置了一套css的顺序，因此我们下面可以不用自定义order/properties-order了
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-selector-no-empty",
    // 因为上面使用了stylelint-config-rational-order，里面已经添加了stylelint-order
    // "stylelint-order",
  ],
  rules: {
    // 禁止空选择器
    "plugin/stylelint-selector-no-empty": true,
    "order/order": [
      // 排序 css 自定义变量 --variable 列在最前边
      ["custom-properties", "declarations"],
      {
        disableFix: true,
      },
    ],
    // "order/properties-order":[
    //     "position",
    //     "top",
    //     "right",
    //     "bottom",
    //     "left",
    //     "z-index",
    //     "display",
    //     "float",
    //     "width",
    //     "height"
    // ]
  },
}
