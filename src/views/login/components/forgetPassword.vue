<!--
 * @Author: your name
 * @Date: 2022-04-19 00:00:42
 * @LastEditTime: 2022-04-19 00:23:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\views\login\components\loginWindowDialog copy.vue
-->
<!--
 * @Author: your name
 * @Date: 2022-04-12 15:33:32
 * @LastEditTime: 2022-04-16 11:09:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\views\login\signIn\components\registeredSuccessfully.vue
-->
<template>
  <div>
    <el-dialog
      title="密码找回"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      top="15%"
      width="32%">
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <template>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="手机号找回" name="01"></el-tab-pane>
                <el-tab-pane label="邮箱找回" name="02"></el-tab-pane>
              </el-tabs>
            </template>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="getBack">忘记密码</el-button>
        <el-button type="primary" :loading="submitForloading" @click="confirmBtn">登录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      submitForloading: false,
      activeName:'01',
      ruleForm: {},
      rules: {}
    }
  },
  methods: {
    init() {
      console.log('-----')
      this.dialogVisible = true
    },
    // 去登录事件按钮
    confirmBtn() {
      this.submitForloading = true
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          this.submitForloading = false
          return this.$message.warning('请完整填写必填项信息！')
        }
        setTimeout(() => {
          this.submitForloading = false
          this.$router.push('/')
          this.dialogVisible = false
          this.$message.s('请完整填写必填项信息！')
        }, 500)
      })
    },
    // 返回事件按钮
    getBack() {
      this.dialogVisible = false
    },
    handleClick() {}
  }
}
</script>

<style>
.el-dialog__body {
    padding: 0px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
</style>
