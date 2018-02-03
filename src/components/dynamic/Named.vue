<template>
  <div class="named">
    <h1>Named Views</h1>
    <ul>
      <li>
        <router-link to="/named/lib">/lib</router-link>
      </li>
      <li>
        <router-link to="/named/other">/other</router-link>
      </li>
    </ul>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Named'
}
</script>

<style scoped>
</style>
