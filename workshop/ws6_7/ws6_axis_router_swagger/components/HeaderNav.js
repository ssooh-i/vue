export default {
    template: `
        <div class="header">
            <router-link to="/"> <img src="./img/ssafy_logo.png" class="ssafy_logo" /></router-link>
            <p class="logo">도서관리</p>
        </div>
    `
};
// router-link는 html 태그로 변환되면 a 태그로 렌더링된다