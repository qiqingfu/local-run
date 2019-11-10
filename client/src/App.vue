<template>
  <div id="app">
    <div class="app__nav">
      <router-link to="/">Index</router-link>
      <router-link to="/total">Total</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app__nav {
  a {
    margin: 0 10px;
  }
}
</style>
