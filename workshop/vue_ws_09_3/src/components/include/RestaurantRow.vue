<template>
  <li>
    <router-link :to="`/restaurant/view/${resId}`">
      <img :src="src" width="200" height="200" />
    </router-link>
    <h4>{{ name }}</h4>
    <div>대표메뉴 : {{ signatureMenu }}</div>
  </li>
</template>
<script>
export default {
  name: "ListRow",
  props: {
    resId: Number,
    name: String,
    signatureMenu: String,
    fileName: String,
  },
  created() {},
  computed: {
    src() {
      return (
        "http://localhost:9095/restaurantapi/download?fileName=" + this.fileName
      );
    },
  },
};
</script>
