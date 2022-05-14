<!--
 * @Author: your name
 * @Date: 2022-04-11 11:35:09
 * @LastEditTime: 2022-04-18 23:32:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blackOnions\src\views\login\signIn\index.vue
-->
<template>
  <div class="home">
    <el-main>
      <div>
        <h2 style="text-align: center;font-size: 36px;">欢迎你。请完成本页面的注册流程</h2>
      </div>
      <!-- 注册表单步骤 -->
      <div class="login_step" style="display: flex;justify-content: space-around;">
        <div style="width: 36%;display: flex;">
          <div style="width: 40px;">
            <i class="el-icon-notebook-1" style="font-size:32px"></i>
          </div>
          <el-steps style="width: 100%;" :active="active">
            <el-step title="开始学习第一步，填写信息注册" icon="el-icon-circle-plus-outline"></el-step>
            <el-step title="第二步，完成" icon="el-icon-circle-check"></el-step>
          </el-steps>
        </div>
      </div>
      <!-- 注册表单填写信息 -->
      <div v-loading="mainloading"  style="margin-top:30px">
        <div v-if="typeNull" class="form_main">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="240px" class="demo-ruleForm">
            <el-row>
              <el-col :span="18">
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
              <el-col :span="18">
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
              <el-col :span="18">
                <el-form-item 
                  label="确认密码"
                  prop="logPassTwo"
                >
                  <el-input
                    placeholder="再次确认密码，和登录密码须保持一致。"
                    v-model.trim="ruleForm.logPassTwo"
                    show-password></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18">
                <el-form-item 
                  label="昵称"
                  prop="nickname"
                >
                  <el-input
                    placeholder="用来让别人认识你，请取一个有趣的名字吧！"
                    v-model.trim="ruleForm.nickname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18">
                <el-form-item 
                  label="年龄"
                >
                  <el-input
                    placeholder="告诉别人你多大了。"
                    v-model.trim="ruleForm.age"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18">
                <el-form-item 
                  label="手机号"
                >
                  <el-input
                    placeholder="提示：绑定你的手机号，可以用来找回密码。"
                    v-model.trim="ruleForm.cellPhone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18">
                <el-form-item 
                  label="邮箱"
                >
                  <el-input
                    placeholder="提示：绑定一个邮箱，用来接收你在本站的活动提醒。"
                    v-model.trim="ruleForm.mailbox"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18">
                <el-form-item 
                  label="上传头像"
                  prop="uploadPhoto"
                >
                  <el-upload
                    ref="mYupload"
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :on-error="loseUpload"
                    :before-upload="beforeAvatarUpload">
                    <img style="width: 100px;height: 100px;" v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                    <span @click.stop="clearimg" v-if="ruleForm.imageUrl" style="    position: absolute;left: 44px;buttom: 20px;top: 110px;" class="el-icon-close"></span>
                    <i style="display: block;margin-top: 40%;" v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18">
                <el-form-item 
                  label="邀请码"
                  prop="invitationCode"
                >
                  <el-input
                    placeholder="必须通过官方渠道/好友生成的邀请码，才可以注册账号。"
                    v-model.trim="ruleForm.invitationCode"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <!-- 表单按钮 -->
          <div style="width: 160px;height: 40px;margin: 30px auto;display: flex;justify-content: space-between;">
            <el-button type="warning" @click="replacement" plain>返回首页</el-button>
            <el-button type="primary" :loading="submitForloading" @click="submitFor" plain>提交</el-button>
          </div>
        </div>
      </div>
    </el-main>
    <loginWindowDialog @synLogin="synLogin" ref="loginWindowDialog"/>
    <registeredSuccessfully @syntony="syntony" ref="registeredSuccessfully" />
  </div>
</template>

<script>

import loginWindowDialog from '@/views/login/components/loginWindowDialog'
import registeredSuccessfully from "./components/registeredSuccessfully.vue"
export default {
  components: {
    registeredSuccessfully,
    loginWindowDialog
  },
  data() {
    const validateContractNo = (rule, value, callback) => {
      if (value !== this.ruleForm.logPassword) {
        return callback(new Error('确认密码和登录密码不一致，请修改！'));
      } else {
        callback()
      }
    }
    return {
      typeNull: true,
      submitForloading: false,
      active: 1, // 目前在第几步
      mainloading: false,
      ruleForm: {
        logAccount: '',
        logPassword: '',
        logPassTwo: '',
        nickname: '',
        age: '',
        cellPhone: '',
        mailbox: '',
        imageUrl: '',
        invitationCode: ''
      },
      rules: {
        logAccount: [
          { required: true, message: '请输入登陆账号', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        logPassword: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        logPassTwo: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: validateContractNo, trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        invitationCode: [
          { required: true, message: '请输入邀请码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.emptyData()
    this.mainloading = true
    setTimeout(() => {
      this.mainloading = false
    }, 1000)
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw)
    },
    // 清除头像
    clearimg() {
      this.$refs.mYupload.clearFiles()
      this.ruleForm.imageUrl = ''
    },
    loseUpload() {
      this.$message.error('上传头像图片失败，请更换！')
    },
    // 上传图片验证规则
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 返回首页
    replacement() {
      this.$router.push('/home')
    },
    // 提交事件按钮
    submitFor() {
      this.submitForloading = true
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          this.submitForloading = false
          return this.$message.warning('请完整填写必填项信息！')
        }
        setTimeout(() => {
          this.submitForloading = false
          this.$refs.registeredSuccessfully.init()
          this.active = 2
        }, 500)
      })
    },
    // 清空数据和表单验证
    emptyData() {
      this.ruleForm = {
        logAccount: '',
        logPassword: '',
        logPassTwo: '',
        nickname: '',
        age: '',
        cellPhone: '',
        mailbox: '',
        imageUrl: '',
        invitationCode: ''
      }
      this.active = 1
      if (this.$refs.ruleForm) {
        this.$nextTick(() => {
          this.$refs.ruleForm.clearValidate()
        })
      }
    },
    // 组件回调返回
    syntony(data) {
      if (data.type) {
        this.$refs.loginWindowDialog.init()
      }
      this.emptyData()
    },
    // 组件回调登录
    synLogin() {
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #fff;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid rgb(161, 159, 159);
}
.el-main {
  padding: 0;
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
.form_main {
  width: 1000px;
  margin: 0 auto;
}
.login_step {
  margin: 0 auto;
}
</style>

<style>
.el-upload {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    outline: 0;
    width: 100px;
    height: 100px;
    border: 1px solid #b3aeae;
}
</style>
