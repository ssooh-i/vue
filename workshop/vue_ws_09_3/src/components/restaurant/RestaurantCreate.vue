<template>
  <main>
    <div class="form-div">
      <regist-form></regist-form>
    </div>
  </main>
</template>
<script>
import RegistForm from "../include/RegistForm.vue";
export default {
  components: {
    RegistForm,
  },
  created() {
    this.$store.dispatch("setFormType", "create");
  },
};
</script>
