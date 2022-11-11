<template>
  <div class="home">
    <test-form></test-form>
  </div>
</template>

<script>
// @ is an alias to /src
import TestForm from "@/components/TestForm.vue";

export default {
  name: 'HomeView',
  components: {
    TestForm
  }
}
</script>
