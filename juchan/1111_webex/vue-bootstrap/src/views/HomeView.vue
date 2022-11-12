<template>
  <div class="home">
    <TestForm></TestForm>
  </div>
</template>

<script>
// @ is an alias to /src
import TestForm from "@/components/TestForm";

export default {
  name: "HomeView",
  components: {
    TestForm,
  },
};
</script>
