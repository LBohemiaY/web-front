<template>
  <el-header class="me-area">
    <el-row>
      <el-menu
        :router="true"
        menu-trigger="click"
        active-text-color="#5FB878"
        :default-active="activeIndex"
        mode="horizontal"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/category/all">文章分类</el-menu-item>
        <el-menu-item index="/tag/all">标签</el-menu-item>
        <el-menu-item index="/archives">文章归档</el-menu-item>
        <el-menu-item index="/log">日志</el-menu-item>
        <el-menu-item index="/messageBoard">留言板</el-menu-item>
        <el-col :span="4" :offset="4">
          <el-menu-item index="/write">
            <i class="el-icon-edit"></i>写文章
          </el-menu-item>
        </el-col>
      </el-menu>
    </el-row>
  </el-header>
</template>

<script>

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
