import MainContents from "./components/MainContents.js";
import BookCreate from "./components/BookCreate.js";
import BookList from "./components/BookList.js";
import BookView from "./components/BookView.js";
import BookModify from "./components/BookModify.js";
import BookDelete from "./components/BookDelete.js";

// Vue와 VueRouter을 연결
Vue.use(VueRouter);
export default new VueRouter({
  //mode의 종류에는 history, hash(기본값)가 있다.
   //hash: url이 변경될때 페이지를 다시 로드하지 않는다
   //history: history.pushState API를 활용해서 페이지를 다시 로드하지 않고도 url탐색을 할수 있다
   //         (url에 #이 포함되지 않기를 원하면 history를 사용)
  mode: "history",
  routes:[
    {
      path: "/",
      alias : ["/index.html"],
      name: "main",
      component: MainContents
    },
    {
      path: "/list",
      name: "list",
      component: BookList
    },
    {
      path: "/create",
      name: "create",
      component: BookCreate
    },
    {
      path: "/view",
      name: "view",
      component: BookView
    },
    {
      path: "/modify",
      name: "modify",
      component: BookModify
    },
    {
      path: "/delete",
      name: "delete",
      component: BookDelete
    },
  ]
});
