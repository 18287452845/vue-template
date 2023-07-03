<template>
  <div>
    <template v-for="(item, index) in menuList" :key="index">
      <template v-if="!item.children">
        <el-menu-item
          :index="item.path"
          v-if="!item.meta.hidden"
          @click="goRouter"
        >
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item
          :index="item.children[0].path"
          v-if="!item.children[0].meta.hidden"
          @click="goRouter"
        >
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>

          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>

      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps(['menuList'])
const goRouter = (vc: any) => {}
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style scoped lang="scss"></style>
