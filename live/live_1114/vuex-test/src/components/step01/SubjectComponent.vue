<template>
  <button @click="addCount">{{ title }} - {{ count }}</button>
</template>

<script>
export default {
  name: "SubjectComponent",
  props: ["title"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount: function () {
      this.count += 1;
      // this.$emit("addtotcount"); // 이제 부모한테 안보내고
      this.$store.state.count++; // 저장소에 ++
    },
  },
};
</script>

<style></style>
