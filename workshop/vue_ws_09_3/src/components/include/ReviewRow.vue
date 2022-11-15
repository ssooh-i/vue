<template>
  <li>
    <span
      ><h3>{{ writer }}</h3></span
    ><button @click="deleteReview()">x</button>
    <p>{{ content }}</p>
  </li>
</template>
<script>
export default {
  name: "ReviewRow",
  props: {
    resId: Number,
    writer: String,
    content: String,
  },
  methods: {
    deleteReview() {
      this.$emit("delete");
    },
  },
};
</script>
