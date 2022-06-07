<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <!--基座中可以放自己的路由-->
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <!--引用其他子应用-->
      <el-menu-item index="/app-vue2">vue2应用</el-menu-item>
      <el-menu-item index="/app-vue3">vue3应用</el-menu-item>
<!--      <el-menu-item index="/react">react应用</el-menu-item>-->
    </el-menu>
    <router-view></router-view>
    <div id="subapp"></div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  width: 100vw;
}
#subapp {
  width: 100%;
  height: calc(100% - 61px);
}
</style>
