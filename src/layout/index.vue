<template>
    <div class="layout_container">
        <!-- 左侧菜单
         -->
        <div class="layout_slider">

            <Logo></Logo>
            <el-scrollbar>
                <div class="scrollbar">
                    <el-menu background-color="#344454" text-color="#FFF">
                        <Menu :menuList="user.menuRoutes"></Menu>
                    </el-menu>
                </div>

            </el-scrollbar>
        </div>
        <!-- 右侧导航和内容 -->
        <div class="layout_content">
            <!-- 导航条 -->
            <div class="layout_navbar"></div>
            <!-- 主要内容 -->
            <div class="layout_main"></div>
        </div>

    </div>
</template>
 
<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import userStore from '@/stores/modules/user';
let user = userStore()
</script>
 
<style lang="scss" scoped>
.layout_container {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: skyblue;

    .layout_slider {
        width: $slider_width;
        height: 100vh;
        background-color: $slider_color;
        overflow: scroll;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $logo_height);
            overflow: scroll;
            .el-menu{
                border-right: none;
            }
        }
    }

    .layout_content {
        width: calc(100% - $slider_width);
        height: 100vh;
        background-color: salmon;
        display: flex;
        flex-direction: column;

        .layout_navbar {
            width: 100%;
            height: $navbar_height;
            background-color: rgb(208, 89, 125);
        }

        .layout_main {
            width: 100%;
            padding: 10px;
            height: calc(100% - #{$navbar_height});
            background-color: rgb(36, 213, 69);
            overflow: scroll;
        }
    }

}
</style>