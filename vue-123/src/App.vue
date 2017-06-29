<template>
  <div id="app">
    <router-view class="value" keep-alive transition transition-mode="out-in"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  component: {}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
