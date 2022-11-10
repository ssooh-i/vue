<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <apt-list></apt-list>
  </div>
</template>

<script>
//import AptList from "./components/AptList.vue"; //원래는 이렇게 사용하는데
import AptList from "@/components/AptList"; //@를 사용하면 src부터 확인함

export default {
  name: 'App',
  components: { //components 넣어주기
    AptList,
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
