<template>
  <div id="user">
    <h1>Hello User!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/user/foo">/user/foo</router-link>
      <router-link to="/user/bar">/user/bar</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style scoped>
</style>
