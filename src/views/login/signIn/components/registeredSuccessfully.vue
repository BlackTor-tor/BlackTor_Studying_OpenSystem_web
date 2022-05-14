<!--
 * @Author: your name
 * @Date: 2022-04-12 15:33:32
 * @LastEditTime: 2022-04-13 15:38:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\views\login\signIn\components\registeredSuccessfully.vue
-->
<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      top="15%"
      width="30%">
      <div>
        <span style="font-size: 110px; color: green;display: block;text-align: center;" class="el-icon-success"></span>
        <span style="font-size: 24px; color: #1b1f1b;display: block;text-align: center;">注册成功</span>
        <span style="font-size: 24px; color: #1b1f1b;display: block;text-align: center;">可以开始学习啦</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="getBack">返回</el-button>
        <el-button type="primary" @click="confirmBtn">去登录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    init() {
      this.dialogVisible = true
    },
    // 去登录事件按钮
    confirmBtn() {
      this.dialogVisible = false
      this.$emit('syntony', {type: true})
      // this.$router.push('/')
    },
    // 返回事件按钮
    getBack() {
      this.$emit('syntony', {type: false})
      this.dialogVisible = false
    }
  }
}
</script>
