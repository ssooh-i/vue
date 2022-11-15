import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
  },
  getters: {
    books(state) {
      return state.books;
    },
    book(state) {
      return state.book;
    },
  },
  mutations: {
    setBooks(state, payload) {
      state.books = payload;
    },
    setBook(state, payload) {
      state.book = payload;
    },
  },
  actions: {
    getBooks(context) {
      // localStorage에서 booklist로 저장된 도서 목록을 얻어온다.
      const booklist = localStorage.getItem("booklist");
      let newBook = {
        books: [],
      };
      if (booklist) {
        // 도서목록이 있을경우 JSON객체로 parsing한다.
        newBook = JSON.parse(booklist);
      } else {
        localStorage.setItem("booklist", JSON.stringify(newBook));
      }
      // 가격순으로 정렬
      newBook.books.sort((a, b) => {
        return -(a.price - b.price);
      });
      context.commit("setBooks", newBook.books);
    },
    getBook(context, payload) {
      const booklist = JSON.parse(localStorage.getItem("booklist"));
      for (let obj of booklist.books) {
        // 보여줄 isbn을 찾았다면.
        if (payload == obj.isbn) {
          // 전역변수 book에 화면에 보여줄 객체를 저장.
          context.commit("setBook", obj);
          break;
        }
      }
    },
  },
  modules: {},
});
