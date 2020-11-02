<template>
  <el-header class="me-area">
    <el-row>
      <el-col :span="4" class="me-header-left">
        <router-link to="/" class="me-title">
          <img src="@/assets/img/logo.png"/>
        </router-link>
      </el-col>
      <el-col v-if="!simple" :span="16">
        <el-menu :router="true" menu-trigger="click" active-text-color="#5FB878" :default-active="activeIndex" mode="horizontal">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/category/all">文章分类</el-menu-item>
          <el-menu-item index="/tag/all">标签</el-menu-item>
          <el-menu-item index="/game">在线游戏(未上线)</el-menu-item>
          <el-menu-item index="/log">更新日志</el-menu-item>
          <el-menu-item index="/noticeBoard">消息中心</el-menu-item>
          <el-col :span="4" :offset="2">
            <el-menu-item index="/write">
              <i class="el-icon-edit"></i>写文章
            </el-menu-item>
          </el-col>
        </el-menu>
      </el-col>

      <el-col :span="4">
        <el-menu :router=true menu-trigger="click" mode="horizontal" active-text-color="#5FB878">
          <template v-if="!isLogin">
            <el-menu-item index="/login">
              <el-button type="text">登录</el-button>
            </el-menu-item>
            <el-menu-item index="/register">
              <el-button type="text">注册</el-button>
            </el-menu-item>
          </template>
          <template v-else>
            <el-submenu index>
              <!-- <template slot="title">
                此处为添加用户头像到顶部栏
                <img class="me-header-picture" :src="user.avatar"/>
              </template> -->
              <el-menu-item index @click="logout"><i class="el-icon-back"></i>退出</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { getToken } from '@/utils/auth'

export default {
  name: 'BaseHeader',
  props: {
      activeIndex: String,
      simple: {
        type: Boolean,
        default: false
      }
    },
  data() {
    return {
      isLogin: (getToken() || '') != ''
    }
  },
}
</script>

<style>
.el-header {
  position: fixed;
  z-index: 1024;
  min-width: 100%;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
}

.me-title {
  margin-top: 10px;
  font-size: 24px;
}

.me-header-left {
  margin-top: 10px;
}

.me-title img {
  max-height: 2.4rem;
  max-width: 100%;
}

.me-header-picture {
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #5fb878;
}
</style>
