import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/LoginView";
import MainView from "@/views/MainView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },

  // {
  //   path: "/main",
  //   name: "main",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/MainView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
