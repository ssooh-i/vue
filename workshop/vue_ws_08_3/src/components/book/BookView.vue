<template>
  <div class="regist">
    <h1 class="underline">SSAFY 도서 정보</h1>
    <div class="regist_form">
      <label for="isbn">도서번호</label>
      <div class="view">{{ book.isbn }}</div>
      <label for="title">도서명</label>
      <div class="view">{{ book.title }}</div>
      <label for="author">저자</label>
      <div class="view">{{ book.author }}</div>
      <label for="price">가격</label>
      <div class="view">{{ numberWithCommas(book.price) }}원</div>
      <label for="content">설명</label>
      <div class="view" v-html="enterToBr(book.content)"></div>
      <div style="padding-top: 15px">
        <router-link :to="`/book/modify/${book.isbn}`" class="btn"
          >수정</router-link
        >
        <a href="#" class="btn" @click="deleteBook">삭제</a>
        <router-link to="/book" class="btn">목록</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["book"])
  },
  created() {
    this.$store.dispatch("getBook", this.$route.params.isbn)
  },
  methods: {
    deleteBook() {
      // url에서 파라미터정보 얻기.
      const isbn = this.$route.params.isbn;
      // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
      const booklist = JSON.parse(localStorage.getItem("booklist"));
      // 도서목록에서 삭제할 isbn에 해당하지 않는 도서를 검색 booklist의 books 저장한다.
      booklist.books = booklist.books.filter((book) => {
        return book.isbn != isbn;
      });
      // 도서목록 booklist객체를 booklist라는 이름으로 localStorage에 저장한다.
      localStorage.setItem("booklist", JSON.stringify(booklist));

      alert("삭제가 완료되었습니다.");
      // list.html 페이지로 이동.
      this.$router.push("/book");
    },
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      if (str) return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    }
  }
};
</script>

<style scoped>
.regist {
  padding: 10px;
}
.regist_form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>
