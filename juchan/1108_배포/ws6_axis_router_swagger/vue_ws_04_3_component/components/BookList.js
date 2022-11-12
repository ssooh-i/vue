export default {
  template: /* html */ `
    <div>
        <h1 class="underline">도서 목록</h1>
        <div style="text-align: right">
            <button @click="movePage">도서 등록</button>
        </div>
        <div v-if="books.length">
            <table id="book-list">
                <colgroup>
                    <col style="width: 5%" />
                    <col style="width: 20%" />
                    <col style="width: 40%" />
                    <col style="width: 20%" />
                    <col style="width: 15%" />
                </colgroup>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>ISBN</th>
                    <th>제목</th>
                    <th>저자</th>
                    <th>가격</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(book, index) in books" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{book.isbn}}</td>
                    <td><router-link :to="'/view?isbn=' + book.isbn">{{book.title}}</router-link></td>
                    <td>{{book.author}}</td>
                    <td>{{numberWithCommas(book.price)}}원</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="text-center">게시글이 없습니다.</div>
    </div>
    `,
  data() {
    return {
      books: [],
    };
  },
  created() {
    axios.get("http://localhost:9999/vuews/book").then((res) => {
      console.log(res.data);
      this.books = res.data;
    });
  },
  methods: {
    movePage() {
      this.$router.push("/create");
    },
    numberWithCommas(x) {
      // 숫자의 3자리마다 ',' 찍기
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
