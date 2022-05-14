<!--
 * @Author: your name
 * @Date: 2022-04-11 10:21:35
 * @LastEditTime: 2022-04-18 21:10:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #eee;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 80%;
  /* 至少保留1170像素 */
  min-width: 1170px;
  background-color: #eee;
  margin: 0 auto;
  height: 100%;
  overflow-x: hidden;
 	overflow-y: auto;
}
#app::-webkit-scrollbar {
  display: none;
}
#app::-webkit-scrollbar {
  width: 0px;
}
</style>
