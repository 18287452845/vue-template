import { login } from '@/api/user'
import type { LoginForm } from '@/api/user/type'
import { defineStore } from 'pinia'
import { ConstRouter } from '@/router/routers'

let userStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('token') || '',
      menuRoutes: ConstRouter,
    }
  },
  actions: {
    async userLogin(data: LoginForm) {
      let res: any = await login(data)
      if (res.code === 200) {
        this.token = res.data
        localStorage.setItem('token', res.data)
        return 'ok'
      }
      return Promise.reject(new Error('error'))
    },
  },
  getters: {},
})
export default userStore
