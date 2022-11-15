<template>
  <header>
    <nav class="container">
      <div>
        <router-link to="/">
          <a class="header_nav_home" href="#">딜리싸피</a>
        </router-link>
      </div>
      <div class="header_nav_menuitem">
        <router-link to="login" v-if="showLogin">
          <a href="login.html">로그인</a>
        </router-link>
        <a href="#" @click="logout" v-else>로그아웃</a>
        <a href="#">마이페이지</a>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {
    logout() {
      this.userName = "";
      this.showLogin = true;
      alert("로그아웃 했습니다.");
      this.$router.go();
    },
    setUser() {
      if (this.userName) {
        this.showLogin = false;
      } else {
        this.showLogin = true;
      }
    },
  },
  computed: {
    ...mapState(["userName"]),
  },
  created() {
    this.setUser();
  },
};
</script>
<style>
.header_nav_menuitem > a {
  margin-left: 10px;
}
form > button {
  margin-left: 10px;
}
</style>
