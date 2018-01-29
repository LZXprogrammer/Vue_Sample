<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        message: '我是src/components里的hello.vue，我通过app.vue里的router-view展示'
      }
    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }
</style>
