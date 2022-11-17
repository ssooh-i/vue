<template>
  <div class="Main">
    <the-header></the-header>

    <h1>This is an Main page</h1>
    <the-footer class="footer"></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/layouts/TheHeader.vue";
import TheFooter from "@/layouts/TheFooter.vue";

export default {
  name: "main",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
/* 이주찬한테 밑으로 내려보내는 거 강제말고 반응형으로 하는 거 물어보기 */
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
