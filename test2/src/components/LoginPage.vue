<template>
  <session class="loginPage">
    <div class="loginForm">
      <h1 class="loginTitle">Where is my house?</h1>
      <input type="text" class="login-input" placeholder="id" v-model="uid" /><br />
      <input type="password" class="login-input" placeholder="password" v-model="upw" /><br />
      <button type="button" class="btn btn-outline-success" id="img_btn" @click="allowLogin">Login</button><br />
      <button type="button" class="btn_image" @click="allowKakao">
        <img src="@/assets/kakao_login_large_wide.png" id="img_btn2" />
      </button>
      <div>
        <p></p>
        <br />
      </div>
      <a href="#" class="joinUs">Join Us</a>
    </div>
  </session>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      uid: "",
      upw: "",
    };
  },
  methods: {
    allowKakao() {},
    allowLogin() {},
  },
};
</script>

<style scoped>
.loginPage {
  text-align: center;
}
.loginForm {
  position: relative;
  top: 45vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loginTitle {
  margin: 5px;
  font-size: 4rem;
  font-weight: bold;
  padding: 5px 5px 20px 5px; /* 상우하좌, 시계방향 */
}
.login-input {
  display: inline-block;
  border: 1px solid rgba(161, 161, 161, 0.493);
  border-radius: 5px;
  padding: 3px;
  margin: 5px;
  font-size: 1.3rem;
}
#img_btn {
  width: 243px;
  margin: 5px;
}
#img_btn2 {
  width: 243px;
  height: 38px;
  margin: 5px;
}
.joinUs {
  text-decoration-line: none;
  padding: 50px 5px 5px 5px; /* 상우하좌, 시계방향 */
  font-size: 15px;
  color: gray;
}
.joinUs:hover {
  color: rgb(255, 60, 0);
}
</style>
