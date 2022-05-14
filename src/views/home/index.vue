<!--
 * @Author: your name
 * @Date: 2022-04-11 11:41:55
 * @LastEditTime: 2022-04-18 21:10:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\views\home\index.vue
-->
<template>
  <div class="home">
    <el-container>
      <!-- 导航栏 -->
      <el-header>
        <div class="el-header_box">
          <div class="nav_login">
            <el-button @click="signin_router" type="info">注册</el-button>
            <span class="nav_login_span"></span>
            <el-button @click="signin_login" type="info">登录</el-button>
          </div>
        </div>
      </el-header>
      <!-- 主要内容区域 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <loginWindowDialog @synLogin="synLogin" ref="loginWindowDialog"/>
  </div>
</template>

<script>
// import signInDialog from '@/views/login/signInDialog'
import loginWindowDialog from '@/views/login/components/loginWindowDialog'
export default {
  components: {
    // signInDialog
    loginWindowDialog
  },
  data() {
    return {}
  },
  methods: {
    signin_router() {
      if (window.location.pathname !== '/signIn') {
        this.$router.push('/signIn')
      }
    },
    signin_login() {
      this.$refs.loginWindowDialog.init()
    },
    // 组件回调登录
    synLogin() {
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #fff;
}
.el-header {
  background-color: #fff;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-header_box {
  width: 80%;
  min-width: 1170px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid rgb(161, 159, 159);
  position: fixed;
  top: 0;
  z-index: 100;
}
.el-main {
  width: 100%;
  padding: 0px;
  height: 100%;
}
.nav_login {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
}
.nav_login_span {
  width: 1px;
  height: 40px;
  background-color: #444;
  margin: 0 10px;
}
</style>
