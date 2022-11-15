<template>
  <div>
    <div class="form-control">
      <h1>맛집 정보</h1>
    </div>
    <div class="form-control">
      <div class="form-line"></div>
    </div>
    <div class="res-image">
      <img :src="src" :alt="restaurant.name" width="400" height="400" />
    </div>
    <div class="form-control">
      <label for="resName">식당이름 :</label>
      <input
        name="resName"
        id="resName"
        type="text"
        v-model="restaurant.name"
        readonly
      />
    </div>
    <div class="form-control">
      <label for="resAddress">식당위치 :</label>
      <input
        name="resAddress"
        id="resAddress"
        type="text"
        v-model="restaurant.address"
        readonly
      />
    </div>
    <div class="form-control">
      <label for="signatureMenu">대표메뉴 :</label>
      <input
        name="signatureMenu"
        id="signatureMenu"
        type="text"
        v-model="restaurant.signatureMenu"
        readonly
      />
    </div>
    <div class="form-control">
      <label for="resRate">별점 :</label>
      <input
        name="resRate"
        id="resRate"
        type="number"
        v-model="restaurant.rate"
        readonly
      />
    </div>
    <div class="form-control">
      <div class="form-line"></div>
    </div>
    <div class="form-control">
      <router-link :to="`/restaurant/modify/${restaurant.resId}`">
        <button class="btn">수정</button>
      </router-link>
      <button @click="deleteRestaurant" class="btn">삭제</button>
      <router-link to="/restaurant">
        <button class="btn">목록</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common.js";
import { mapState } from "vuex";

export default {
  methods: {
    deleteRestaurant() {
      // 맛집 삭제
      if (confirm("정말로 삭제하시겠습니까?")) {
        http
          .delete(`/restaurantapi/res/delete/${this.restaurant.resId}`)
          .then(({ data }) => {
            let msg = "삭제 처리중 문제가 발생하였습니다.";
            if (data > 0) {
              msg = "삭제가 완료되었습니다.";
            }
            alert(msg);
            this.$router.push("/restaurant");
          });
      }
    },
  },
  computed: {
    ...mapState(["restaurant"]),
    src() {
      if (this.restaurant.fileName) {
        return (
          "http://localhost:9095/restaurantapi/download?fileName=" +
          this.restaurant.fileName
        );
      }
      return "";
    },
  },
};
</script>
