/*
 * @Author: your name
 * @Date: 2022-04-11 10:21:35
 * @LastEditTime: 2022-04-13 09:46:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import login from "./login";
import Home from "./home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: () => import("../views/home"),
    children: [
      // 登录
      ...login,
      // ...Register,
      // 首页
      ...Home
    ]
  },
  {
    path: "*",
    redirect:'/home',
    component: () => import("../views/home")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
