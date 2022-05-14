<!--
 * @Author: your name
 * @Date: 2022-04-12 15:33:32
 * @LastEditTime: 2022-04-19 00:06:16
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
      width="32%">
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <el-row>
              <el-col :span="20">
                <el-form-item 
                  label="登陆账号"
                  prop="logAccount"
                >
                  <el-input
                    placeholder="请输入任意大小写字母或数字组合，不得超过15位。"
                    v-model.trim="ruleForm.logAccount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20">
                <el-form-item 
                  label="登陆密码"
                  show-password
                  prop="logPassword"
                >
                  <el-input
                    placeholder="请输入任意大小写字母或数字组合，不得超过15位。"
                    v-model.trim="ruleForm.logPassword"
                    show-password></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item 
                  label="验证吗"
                  show-password
                  prop="Validatio"
                >
                  <el-row>
                    <el-col :span="12">
                      <el-input
                        placeholder="请输入任意大小写字母或数字组合，不得超过15位。"
                        v-model.trim="ruleForm.Validatio"
                        show-password></el-input>
                    </el-col>
                    <el-col :span="8">
                      <div @click="img_btn" class="img_div">
                        <i class="img_i el-icon-refresh-left"></i>
                        <img class="img_box" src="https://ue-file.devbefore.com/default/da77c9d54301-4408-9133-20d76ecc47fb">
                      </div>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="getBack">忘记密码</el-button>
        <el-button type="primary" :loading="submitForloading" @click="confirmBtn">登录</el-button>
      </span>
    </el-dialog>
    <forgetPassword ref="forgetPassword"/>
  </div>
</template>

<script>
import forgetPassword from '@/views/login/components/forgetPassword'
export default {
  components: {
    forgetPassword
  },
  data() {
    return {
      dialogVisible: false,
      submitForloading: false,
      ruleForm: {},
      rules: {
        logAccount: [
          { required: true, message: '请输入登陆账号', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        logPassword: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        Validatio: [
          { required: true, message: '请输入验证吗', trigger: 'blur' }
        ]
      }
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
      this.$refs.forgetPassword.init()
    },
    img_btn() {
      console.log('------')
    }
  }
}
</script>

<style scoped>
.img_box {
  width: 100px;
  height: 40px;
}
.img_div:hover .img_i{
  display: block;
}
.img_div {
  margin-left: 20px;
  width: 100px;
  height: 40px;
  position: relative;
  cursor: pointer;
}
.img_i {
  position: absolute;
  left: 38px;
  top: 8px;
  display: none;
  font-size: 26px;
}
</style>
