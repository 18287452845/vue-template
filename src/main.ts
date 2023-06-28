import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import globalComponent from '@/components';
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent);
app.use(router)

app.mount('#app')
