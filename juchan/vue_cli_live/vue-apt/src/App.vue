<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <apt-list></apt-list> <!-- 보여주기 -->
  </div>
</template>

<script>
/* 불, 등, 보
불러오기, 등록하기, 보여주기
*/
// 불
import AptList from "@/components/AptList";

export default {
  name: 'App',
  components: {
    AptList, // 등록하기
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
