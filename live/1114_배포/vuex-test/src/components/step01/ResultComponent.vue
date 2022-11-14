<template>
  <h2>{{ total }}</h2>
</template>

<script>
export default {
  // props: ["total"],
  computed: { //계속 값이 바뀔 때마다 캐싱하기
    total() {
      return this.$store.state.count;
    },
  },
};
</script>

<style></style>
