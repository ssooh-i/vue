<template>
  <div class="header">
    <h1>Header</h1>
    <router-link to="/">Home</router-link> / <router-link to="/bar">Go to Bar</router-link> / <router-link to="/login">Go to Login</router-link>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
.header {
  text-align: center;
  background-color: lightgray;
}

a {
  color: #42b983;
}
</style>
