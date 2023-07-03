<template>
  <div class="container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="loginForm">
          <h1>登录</h1>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" @click="loginHandler">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import { onMounted, reactive,ref } from 'vue'
import { login } from '@/api/user/index'
import userStore from '@/stores/modules/user'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
import { useRouter } from 'vue-router'
const $router = useRouter()
let store = userStore()
let loginForm = reactive({
  name: '',
  password: '',
})
let loading=ref(false)
const loginHandler = () => {
  loading.value=true
  store.userLogin(loginForm).then((res)=>{
    loading.value=false
    $router.push('/')
    ElNotification({
      title: `${getTime()}`,
      message: '欢迎回来',
      type: 'success'
    })
  }).catch((err)=>{
    loading.value=false
    ElNotification({
      title: `登录失败`,
      message: '用户名或密码错误',
      type: 'error'
    })
  })
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/login-bg.jpg');
  background-size: cover;
}
.loginForm {
  padding: 30px 20px;
  background-color: rgba($color: #cecaca, $alpha: 0.6);
  position: relative;
  border-radius: 20px;
  top: 30vh;
  width: 35vw;
  height: 40vh;
  h1 {
    font-size: 40px;
    color: #fff;
    margin-bottom: 20px;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
