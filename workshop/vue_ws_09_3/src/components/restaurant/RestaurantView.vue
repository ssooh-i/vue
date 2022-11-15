<template>
  <main>
    <div class="form-div">
      <view-detail></view-detail>
      <div class="form-control">
        <div class="form-line"></div>
      </div>
      <review-list></review-list>
    </div>
  </main>
</template>
<script>
import ViewDetail from "../include/ViewDetail.vue";
import ReviewList from "../review/ReviewList.vue";
import http from "@/util/http-common.js";

export default {
  components: {
    ReviewList,
    ViewDetail,
  },
  created() {
    // url에서 파라미터 정보 얻기 (식당번호)
    const resId = this.$route.params.resId;
    // axios의 get을 사용하여 서버와 비동기통신
    http.get(`/restaurantapi/res/detail/${resId}`).then(({ data }) => {
      this.$store.dispatch("setRestaurant", data);
    });
  },
};
</script>
