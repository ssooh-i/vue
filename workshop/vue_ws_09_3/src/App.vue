<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
    Footer,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

a {
  text-decoration: none;
  color: #787878;
}

a:hover {
  cursor: pointer;
}

header {
  height: 70px;
  color: black;
  line-height: 70px;
  padding: 0px 30px;
  /* 그림자 효과 */
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
}

.header_nav_home {
  font-size: 38px;
}

.header_nav_search {
  height: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
}

.menu {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  text-align: center;
  height: 30px;
}

.menufont {
  color: black;
  margin-left: 5px;
  margin-right: 5px;
}

.content {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 10px;
}

footer {
  margin-top: 30px;
  /* 그림자 효과 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  color: black;
  height: 50px;
  line-height: 50px;
}

footer > .list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
}

footer > .list a {
  margin: 0px 10px;
}

.detail_box {
  margin-top: 30px;
  text-align: center;
}

.info {
  display: inline-block;
  width: 600px;
}

.button {
  background: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 4px;
}

.name {
  font-style: bold;
}

#app {
  text-align: center;
}

main {
  display: inline-block;
  margin: 0 auto;
  width: 960px;
}

main > .form-div {
  margin: 20px;
  padding: 20px;
  border: 2px solid skyblue;
  border-radius: 20px 20px 20px 20px;
}
.form-control {
  text-align: left;
  margin-bottom: 20px;
  font-size: medium;
}

.form-control > label {
  display: inline-block;
  width: 100px;
}

.form-line {
  background-color: black;
  height: 5px;
}

.btn {
  width: 100px;
  height: 50px;
  font-size: large;
  background-color: aliceblue;
}

.btn:hover {
  opacity: 0.5;
}

.res-image {
  text-align: center;
  margin-bottom: 20px;
}

.index-main {
  margin-top: 30px;
  height: 860px;
}

.review-list > ul > li {
  margin-bottom: 20px;
  text-align: left;
}

span > h3 {
  display: inline-block;
  margin-right: 10px;
}

.left {
  text-align: left;
}

.restaurant-card > ul > li {
  margin-left: 50px;
  margin-bottom: 50px;
}

.main-menu > ul > li {
  font-weight: bold;
}

.main-menu > ul > li > a:hover {
  font-weight: bolder;
  color: black;
}
</style>
