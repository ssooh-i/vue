<template>
  <div>
    <div class="review-list">
      <ul v-if="reviews.length">
        <list-row
          v-for="(review, index) in reviews"
          :key="index"
          :resId="review.resId"
          :writer="review.writer"
          :content="review.content"
          @delete="deleteReview(review.reviewId)"
        ></list-row>
      </ul>
      <h3 v-else>등록된 리뷰가 없습니다.</h3>
    </div>
    <div class="form-control">
      <div class="form-line"></div>
    </div>
    <div class="review-form">
      <form v-on:submit.prevent>
        <h3 class="left">리뷰 등록</h3>
        <div class="form-control">
          <div class="form-line"></div>
        </div>
        <div class="form-control">
          <span>작성자 :</span>
          <input
            type="text"
            name="writer"
            id="writer"
            v-model="review.writer"
            ref="writer"
          />
          <h4>내용</h4>
          <textarea
            name="content"
            v-model="review.content"
            ref="content"
          ></textarea>
        </div>
        <div class="form-control">
          <button class="btn" @click="checkReviewValue">등록</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common.js";
import ListRow from "../include/ReviewRow.vue";

export default {
  components: {
    ListRow,
  },
  data() {
    return {
      review: {
        resId: 0,
        writer: "",
        content: "",
      },
      reviews: [],
    };
  },
  created() {
    this.getReviews();
  },
  methods: {
    getReviews() {
      // url에서 파라미터 정보 얻기 (식당번호)
      const resId = this.$route.params.resId;
      this.review.resId = Number(resId);
      // axios의 get읋 사용하여 서버와 비동기통신
      http.get(`/restaurantapi/review/list/${resId}`).then(({ data }) => {
        this.reviews = data;
      });
    },
    checkReviewValue() {
      // 리뷰 입력값 체크
      let valid = true;
      let msg = "";
      !this.review.writer &&
        ((msg = "작성자 입력해주세요."),
        (valid = false),
        this.$refs.writer.focus());
      valid &&
        !this.review.content &&
        ((msg = "내용 입력해주세요."),
        (valid = false),
        this.$refs.content.focus());

      if (!valid) {
        alert(msg);
      } else {
        this.registReview();
      }
    },
    registReview() {
      http
        .post(`/restaurantapi/review/regist`, {
          writer: this.review.writer,
          content: this.review.content,
          resId: this.review.resId,
        })
        .then(({ data }) => {
          let msg = "리뷰 등록중 문제가 발생하였습니다.";
          if (data > 0) {
            msg = "리뷰 등록이 완료되었습니다.";
            this.review.writer = "";
            this.review.content = "";
          }
          alert(msg);
          this.getReviews();
        });
    },
    deleteReview(reviewId) {
      http.delete(`/restaurantapi/review/${reviewId}`).then(({ data }) => {
        let msg = "리뷰 삭제중 문제가 발생하였습니다.";
        if (data > 0) {
          msg = "리뷰가 삭제되었습니다.";
        }
        alert(msg);
        this.getReviews();
      });
    },
  },
};
</script>
<style>
input {
  margin-left: 10px;
}
</style>
