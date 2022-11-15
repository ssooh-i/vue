<template>
  <form v-on:submit.prevent enctype="multipart/form-data" ref="registForm">
    <div class="form-control">
      <h1>맛집 등록</h1>
    </div>
    <div class="form-control">
      <div class="form-line"></div>
    </div>
    <div class="form-control">
      <label for="resId">식당번호 :</label>
      <input
        name="resId"
        id="resId"
        type="number"
        v-model="restaurant.resId"
        ref="resId"
      />
    </div>
    <div class="form-control">
      <label for="resName">식당이름 :</label>
      <input
        name="resName"
        id="resName"
        type="text"
        v-model="restaurant.name"
        ref="resName"
      />
    </div>
    <div class="form-control">
      <label for="resAddress">식당위치 :</label>
      <input
        name="resAddress"
        id="resAddress"
        type="text"
        v-model="restaurant.address"
        ref="resAddress"
      />
    </div>
    <div class="form-control">
      <label for="signatureMenu">대표메뉴 :</label>
      <input
        name="signatureMenu"
        id="signatureMenu"
        type="text"
        v-model="restaurant.signatureMenu"
        ref="signatureMenu"
      />
    </div>
    <div class="form-control">
      <label for="resRate">별점 :</label>
      <input
        name="resRate"
        id="resRate"
        type="number"
        v-model="restaurant.rate"
        ref="resRate"
      />
    </div>
    <div class="form-control" v-if="formType == 'create'">
      <label for="resFile">파일 :</label>
      <input name="file" id="resFile" type="file" ref="resFile" />
    </div>
    <div class="form-control">
      <div class="form-line"></div>
    </div>
    <div class="form-control">
      <button @click="checkValue" class="btn">등록</button>
      <button type="reset" class="btn">초기화</button>
      <router-link to="/restaurant">
        <button class="btn">목록</button>
      </router-link>
    </div>
  </form>
</template>
<script>
import http from "@/util/http-common.js";
import { mapState } from "vuex";

export default {
  name: "RegistForm",
  methods: {
    checkValue() {
      let valid = true;
      let msg = "";
      !this.restaurant.resId &&
        ((msg = "식당번호를 입력해주세요."),
        (valid = false),
        this.$refs.resId.focus());
      valid &&
        !this.restaurant.name &&
        ((msg = "식당이름을 입력해주세요."),
        (valid = false),
        this.$refs.resName.focus());
      valid &&
        !this.restaurant.address &&
        ((msg = "식당주소를 입력해주세요."),
        (valid = false),
        this.$refs.resAddress.focus());
      valid &&
        !this.restaurant.signatureMenu &&
        ((msg = "대표메뉴를 입력해주세요."),
        (valid = false),
        this.$refs.signatureMenu.focus());
      valid &&
        !this.restaurant.rate &&
        ((msg = "별점을 입력해주세요."),
        (valid = false),
        this.$refs.resRate.focus());
      valid &&
        this.formType == "create" &&
        !this.$refs.resFile.files[0] &&
        ((msg = "이미지를 첨부해주세요."),
        (valid = false),
        this.$refs.resFile.focus());
      if (!valid) {
        alert(msg);
      } else {
        this.formType === "create"
          ? this.registRestaurant()
          : this.modifyRestaurant();
      }
    },
    registRestaurant() {
      // multipart/form-data는 json형식으로 보낼수 없으니 FormData를 사용한다.
      let formData = this.makeFormData();

      // request에 위에서 작성한 formData를 담아서 보낸다.
      // 헤더에 multipart/form-data 정보를 포함시킨다.
      http
        .post(`/restaurantapi/res/regist`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          let msg = "등록 중 문제가 발생했습니다.";
          if (data > 0) {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/restaurant");
        });
    },
    modifyRestaurant() {
      http
        .put(`/restaurantapi/res/update`, {
          resId: this.restaurant.resId,
          name: this.restaurant.name,
          address: this.restaurant.address,
          signatureMenu: this.restaurant.signatureMenu,
          rate: this.restaurant.rate,
        })
        .then(({ data }) => {
          let msg = "수정 처리중 문제가 발생했습니다.";
          if (data > 0) {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/restaurant");
        });
    },
    makeFormData() {
      // multipart/form-data는 json형식으로 보낼수 없으니 FormData를 사용한다.
      let formData = new FormData();
      formData.append("resId", this.restaurant.resId);
      formData.append("name", this.restaurant.name);
      formData.append("address", this.restaurant.address);
      formData.append("signatureMenu", this.restaurant.signatureMenu);
      formData.append("rate", this.restaurant.rate);
      formData.append("file", this.$refs.resFile.files[0]);
      return formData;
    },
  },
  computed: {
    ...mapState(["restaurant", "formType"]),
  },
  created() {
    if (this.formType === "modify") {
      // url의 파라미터 정보 얻기
      const resId = this.$route.params.resId;
      // axios를 이용하여 서버에서 맛집 정보 가져오기
      http.get(`/restaurantapi/res/detail/${resId}`).then(({ data }) => {
        this.$store.dispatch("setRestaurant", data);
      });
    } else {
      let newRes = {
        resId: 0,
        name: "",
        address: "",
        signatureMenu: "",
        rate: 0,
      };
      this.$store.dispatch("setRestaurant", newRes);
    }
  },
};
</script>
