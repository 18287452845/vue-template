<template>
  <div>
    <svg-icon name="welcome" width="600px" height="300px"></svg-icon>
    <h1>aaa</h1>
    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { onMounted } from 'vue';
//@ts-ignore
import request from '@/utils/request.ts'; 

onMounted(() => {
  request({
  url: 'http://127.0.0.1:8080/login',
  method: 'post',
  data: {
    name: 'admin',
    password: '12345'
  }
}).then(res => {
  console.log(res)
})
  
})

</script>

<style lang="scss">

</style>
