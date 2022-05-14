/*
 * @Author: your name
 * @Date: 2022-04-11 10:32:46
 * @LastEditTime: 2022-04-11 14:28:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\router\register.js
 */
export default [
  // 登录
  {
    path: "/login",
    component: () => import("../views/login/register")
  },
  {
    path: "/signIn",
    component: () => import("../views/login/signIn")
  }
]
