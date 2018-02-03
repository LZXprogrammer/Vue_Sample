<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link :to="{name: 'User', params: {id: 123}}">User</router-link>
    </p>

    <div id="clickeven2">
      <!-- `greet` 是在下面定义的方法名 -->
      <button @click="greet">Greet</button>
    </div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'HelloVue',
    methods: {
      greet: function () {
        this.$router.push('Home');
      }
    }
  }

</script>
