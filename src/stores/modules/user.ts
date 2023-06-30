import { login } from '@/api/user'
import type { LoginForm } from '@/api/user/type'
import { defineStore } from 'pinia'

let userStore = defineStore('User', {
  state: () => {
    return {}
  },
  actions: {
    userLogin: async (data: LoginForm) => {
      let res = await login(data)
      console.log(res)
    },
  },
  getters: {},
})
export default userStore
