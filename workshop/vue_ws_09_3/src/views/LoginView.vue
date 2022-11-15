<template>
  <main>
    <div class="form-div">
      <form v-on:submit.prevent>
        <div class="form-control">
          <h1>로그인</h1>
        </div>
        <div class="form-control">
          <div class="form-line"></div>
        </div>
        <div class="form-control">
          <label for="userId">아이디 : </label>
          <input name="userId" id="userId" type="text" v-model="user.userId" />
        </div>
        <div class="form-control">
          <label for="password">비밀번호 : </label>
          <input
            name="password"
            id="password"
            type="password"
            v-model="user.password"
          />
        </div>
        <div class="form-control">
          <div class="form-line"></div>
        </div>
        <div class="form-control">
          <button @click="login" class="btn">로그인</button>
          <button type="reset" class="btn">초기화</button>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
import http from "@/util/http-common.js";

export default {
  data() {
    return {
      user: {
        userId: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      http
        .post("/userapi/login", {
          userId: this.user.userId,
          userPass: this.user.password,
        })
        .then(({ data }) => {
          let msg = "로그인 실패";
          if (data.userName) {
            msg = "로그인 성공";
            this.$store.dispatch("login", data.userName);
            this.$router.push("/");
          }
          alert(msg);
        });
    },
  },
};
</script>
<style>
button {
  margin-right: 20px;
}
</style>
