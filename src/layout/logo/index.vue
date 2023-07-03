<template>
  <div class="logo_container">
    <img src="@/assets/images/logo.png" class="logo" alt="" srcset="" />
    <h1>XXXX系统管理</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo_container {
  height: $logo_height;
  padding: 10px 0;
  display: flex;
  color: white;
  font-size: 1.75em;
  align-items: center;
  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 30px;
  }
}
</style>
