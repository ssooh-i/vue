<template>
  <main>
    <div class="menu">
      <a class="menufont" href="#"><h4>전체</h4></a> |
      <a class="menufont" href="#"><h4>한식</h4></a> |
      <a class="menufont" href="#"><h4>중식</h4></a> |
      <a class="menufont" href="#"><h4>양식</h4></a> |
      <a class="menufont" href="#"><h4>일식</h4></a> |
      <a class="menufont" href="#"><h4>퓨전</h4></a> |
      <a class="menufont" href="#"><h4>디저트</h4></a>
    </div>
    <form id="searchForm" class="row" ref="searchForm">
      <!-- 현재의 페이지 정보를 hidden으로 관리한다. -->
      <input
        type="hidden"
        name="currentPage"
        id="currentPage"
        v-model="searchCondition.currentPage"
      />
      <span>
        <label class="item">검색 컬럼 : </label>
        <select class="item" name="key" id="key" v-model="searchCondition.key">
          <option value="none">없음</option>
          <option value="name">이름</option>
          <option value="signatureMenu">대표메뉴</option>
          <option value="address">위치</option>
        </select>
      </span>
      <span>
        <label class="item">검색어:</label>
        <input
          class="item"
          type="text"
          name="word"
          id="word"
          v-model="searchCondition.word"
        />
      </span>
      <span>
        <label class="item">정렬 컬럼:</label>
        <select
          class="item"
          name="orderBy"
          id="orderBy"
          v-model="searchCondition.orderBy"
        >
          <option value="none">없음</option>
          <option value="name">이름</option>
          <option value="signatureMenu">대표메뉴</option>
          <option value="address">위치</option>
        </select>
      </span>
      <span>
        <label class="item">정렬 방향:</label>
        <select
          class="item"
          name="orderByDir"
          id="orderByDir"
          v-model="searchCondition.orderByDir"
        >
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </span>
      <span>
        <!-- 클릭 시 전송되는 것을 막기 위해 type은 submit이 아니라 button이다. -->
        <input
          @click="movePage(1)"
          class="searchBtn"
          type="button"
          value="검색"
          id="btnSearch"
        />
      </span>
    </form>
    <div class="restaurant-content">
      <div v-if="restaurants.length" class="restaurant-card">
        <ul class="content">
          <list-row
            v-for="(res, index) in restaurants"
            :key="index"
            :resId="res.resId"
            :name="res.name"
            :signatureMenu="res.signatureMenu"
            :fileName="res.fileName"
          />
        </ul>
      </div>
      <div v-else>
        <h1>등록된 맛집이 없습니다.</h1>
      </div>
    </div>
    <ul class="pagination">
      <li class="page-item">
        <a @click.prevent="movePage(1)" class="page-link">최신</a>
      </li>
      <li class="page-item">
        <a
          @click.prevent="
            movePage(navigation.startRange ? 1 : navigation.startPage - 1)
          "
          href="#"
          class="page-link"
          >이전</a
        >
      </li>
      <li
        v-for="index in pageList"
        :key="index"
        :class="
          navigation.currentPage == index ? 'page-item active' : 'page-item'
        "
      >
        <a @click.prevent="movePage(index)" href="#" class="page-link">{{
          index
        }}</a>
      </li>
      <li class="page-item">
        <a
          @click.prevent="
            movePage(
              navgation.endRange ? navigation.endPage : navigation.endPage + 1
            )
          "
          href="#"
          class="page-link"
          >다음</a
        >
      </li>
      <li class="page-item">
        <a
          @click.prevent="movePage(navigation.totalPageCount)"
          href="#"
          class="page-link"
          >마지막</a
        >
      </li>
    </ul>
    <div class="form-control">
      <div class="form-line"></div>
    </div>
    <div class="form-control">
      <router-link to="/restaurant/create">
        <button class="btn">맛집 등록</button>
      </router-link>
    </div>
  </main>
</template>
<script>
import http from "@/util/http-common.js";
import ListRow from "../include/RestaurantRow.vue";
import { mapState } from "vuex";

export default {
  components: {
    ListRow,
  },
  data() {
    return {
      pageList: [],
      navigation: {
        startRange: Boolean,
        startPage: 1,
        endRange: Boolean,
        endPage: 10,
        currentPage: 1,
      },
      searchCondition: {
        key: "none",
        orderBy: "none",
        orderByDir: "asc",
        word: "",
        currentPage: 1,
      },
    };
  },
  created() {
    // axios 의 get을 사용하여 서버와 비동기통신
    http.get(`/restaurantapi/res/search`).then(({ data }) => {
      this.$store.dispatch("setRestaurants", data.restaurants);
      this.navigation = data.navigation;
      this.makePage();
    });
  },
  methods: {
    makePage() {
      this.pageList = [];
      for (
        let i = this.navigation.startPage;
        i <= this.navigation.endPage;
        i++
      ) {
        this.pageList.push(i);
      }
    },
    movePage(page) {
      // get 방식은 파라미터를 json 형식으로 보낼수 없다.
      this.navigation.currentPage = page;
      this.searchCondition.currentPage = page;
      let searchUrl = "/restaurantapi/res/search?";

      let params =
        `key=${this.searchCondition.key}&` +
        `word=${this.searchCondition.word}&` +
        `orderBy=${this.searchCondition.orderBy}&` +
        `orderByDir=${this.searchCondition.orderByDir}&` +
        `currentPage=${this.searchCondition.currentPage}`;
      // 검색 결과
      http.get(searchUrl + params).then(({ data }) => {
        this.$store.dispatch("setRestaurants", data.restaurants);
        this.navigation = data.navigation;
        this.makePage();
      });
    },
  },
  computed: {
    ...mapState(["restaurants"]),
  },
};
</script>
<style>
h1 {
  margin-bottom: 10px;
}
li {
  margin-left: 10px;
}

ul {
  list-style-type: none;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}

.pagination {
  padding-left: 0;
  justify-content: center;
}
.page-item {
  padding: 5px;
  display: inline-block;
  border: 1px solid black;
}
.active {
  background: black;
}
.active a {
  color: white;
}
#restaurant-list {
  border-collapse: collapse;
  width: 100%;
}

#restaurant-list td,
#restaurant-list th {
  border: 1px solid black;
}

#searchForm {
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.searchBtn {
  width: 50px;
  height: 30px;
  background-color: aliceblue;
}
.item {
  vertical-align: middle;
  height: 30px;
  margin: 2px;
}
input[type="text"] {
  padding-left: 5px;
}
</style>
