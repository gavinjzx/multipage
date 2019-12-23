/*
 * @Author: 邹中兴
 * @Date: 2019-12-23 09:16:02
 * @LastEditors  : 邹中兴
 * @LastEditTime : 2019-12-23 10:06:59
 * @Description: babel配置
 */
module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      },
      "mint-ui"
    ],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk",
        "style": true
      },
      "element-ui"
    ],
  ]
}