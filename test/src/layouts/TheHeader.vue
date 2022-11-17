<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <sidebar-test></sidebar-test>
      <!-- <b-navbar-brand href="#">
        <router-link :to="{ name: 'main' }">
          <b-img
            :src="require('@/assets/')"
            id="logo"
            class="d-inline-block align-top"
            alt="logo"
          ></b-img>
        </router-link>
      </b-navbar-brand> -->
      <b-navbar-brand href="#">
        <!--main 화면으로 갈 링크 주기-->
        <router-link :to="{ name: 'main' }">
          <h1 class="nav-a">Where is my House</h1>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link :to="{ name: 'main' }" class="link">
              <b-icon icon="house-door" animation="fade" font-scale="2"></b-icon>
              메인
            </router-link>
            <router-link :to="{ name: 'insta' }" class="m-2 link">
              <b-icon icon="instagram" animation="fade" font-scale="2"></b-icon>
              인스타그램
            </router-link>
            <router-link :to="{ name: 'board' }" class="m-2 link">
              <b-icon icon="journal" animation="fade" font-scale="2"></b-icon>
              게시판
            </router-link>
            <router-link :to="{ name: 'house' }" class="m-2 link">
              <b-icon icon="house-fill" animation="fade" font-scale="2"></b-icon>
              아파트정보
            </router-link>
            <router-link :to="{ name: 'todo' }" class="link">
              <b-icon icon="calendar-check" animation="fade" font-scale="2"></b-icon>
              TodoList
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon icon="people" font-scale="2"></b-icon>
            </template>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'join' }" class="link">
                <b-icon icon="person-circle"></b-icon> 회원가입
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'login' }" class="link"> <b-icon icon="key"></b-icon> 로그인 </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import sidebarTest from "./sidebarTest.vue";
export default {
  components: { sidebarTest },
  name: "TheHeaderNavbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
#logo {
  width: 120px;
}

.link {
  text-decoration: none;
}

.nav-a {
  text-decoration: none;
}
</style>
