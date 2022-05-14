<!--
 * @Author: your name
 * @Date: 2022-04-13 09:32:01
 * @LastEditTime: 2022-04-18 21:11:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\views\home\components\mainPage.vue
-->
<template>
  <div>
    <!-- 轮播图区域 -->
    <div>
      <el-carousel trigger="click" height="360px" :interval="3000">
        <el-carousel-item v-for="item in imgs" :key="item.val">
          <img style="width: 100%;" :src="item.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 弹窗留言区域 -->
    <div class="Popup_Message"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          val: 0,
          url: 'https://ue-file.devbefore.com/default/da77c9d54301-4408-9133-20d76ecc47fb'
        },
        {
          val: 1,
          url: 'https://ue-file.devbefore.com/default/da77c9d54301-4408-9133-20d76ecc47fb'
        },
        {
          val: 2,
          url: 'https://ue-file.devbefore.com/default/da77c9d54301-4408-9133-20d76ecc47fb'
        },
        {
          val: 3,
          url: 'https://ue-file.devbefore.com/default/da77c9d54301-4408-9133-20d76ecc47fb'
        },
        {
          val: 4,
          url: 'https://ue-file.devbefore.com/default/da77c9d54301-4408-9133-20d76ecc47fb'
        }
      ]
    }
  }
}
</script>
<style scoped>
.Popup_Message {
  margin-top: 50px;
  height: 450px;
  width: 100%;
  background-color: #DCDFE6;
}
</style>
