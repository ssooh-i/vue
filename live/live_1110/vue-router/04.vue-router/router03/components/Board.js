export default {
  template: `<div>
    자유 게시판
    <ul>
      <li v-for="i in 5">
        <router-link :to="'/board/' + i">{{i}}번 게시글</router-link>
      </li>
    </ul>
  </div>`,
};
// <router-link :to="'/board/' + i">{{i}}번 게시글</router-link>
//:to= 로 bind하는 거 (vue랑 router랑 연결시키기)
