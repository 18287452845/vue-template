/// <reference types="vite/client" />
declare module 'element-plus'

declare module '*.vue' {
  import Vue from 'vue'
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default {Vue, component}
}
