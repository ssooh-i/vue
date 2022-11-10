// 라우트 컴포넌트
import Main from './components/Main.js';
import Board from './components/Board.js';
import QnA from './components/QnA.js';
import Gallery from './components/Gallery.js';
import BoardView from './components/BoardView.js';

// 라우터 객체 생성
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/board',
      component: Board,
    },
    {
      //동적 라우팅
      path: '/board/:no', 
      // 보드 뒤에 글번호를 들고 오면 boardview로 이동
      component: BoardView,
    },
    {
      path: '/qna',
      component: QnA,
    },
    {
      path: '/gallery',
      component: Gallery,
    },
  ],
});

// Vue 인스턴트 라우터 주입
const app = new Vue({
  el: '#app',
  router,
});
