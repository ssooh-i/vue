import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Restaurant from "../views/RestaurantView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    name: "restaurant",
    path: "/restaurant",
    component: Restaurant,
    // 중첩 route 설정.
    children: [
      {
        path: "",
        name: "restaurant-list",
        component: () => import("@/components/restaurant/RestaurantList.vue"),
      },
      {
        path: "create",
        name: "restaurant-create",
        component: () => import("@/components/restaurant/RestaurantCreate.vue"),
      },
      {
        path: "view/:resId",
        name: "restaurant-view",
        component: () => import("@/components/restaurant/RestaurantView.vue"),
      },
      {
        path: "modify/:resId",
        name: "restaurant-modify",
        component: () => import("@/components/restaurant/RestaurantModify.vue"),
      },
    ],
    redirect: () => {
      return "/restaurant";
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
