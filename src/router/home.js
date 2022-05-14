/*
 * @Author: your name
 * @Date: 2022-04-11 11:43:45
 * @LastEditTime: 2022-04-13 09:46:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\router\home.js
 */
export default [
  // main页面
  {
    path: "/home",
    component: () => import("../views/home/components/mainPage.vue")
  }
]
