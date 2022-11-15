import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [],
    restaurant: {},
    formType: "",
    userName: "",
  },
  getters: {
    restaurants(state) {
      return state.restaurants;
    },
    restaurant(state) {
      return state.restaurant;
    },
    userName(state) {
      return state.userName;
    },
    formType(state) {
      return state.formType;
    },
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload;
    },
    setRestaurants(state, payload) {
      state.restaurants = payload;
    },
    setRestaurant(state, payload) {
      state.restaurant = payload;
    },
    setFormType(state, payload) {
      state.formType = payload;
    },
  },
  actions: {
    login(context, user) {
      context.commit("setUserName", user.userName);
    },
    setRestaurants(context, restaurants) {
      context.commit("setRestaurants", restaurants);
    },
    setRestaurant(context, restaurant) {
      context.commit("setRestaurant", restaurant);
    },
    setFormType(context, type) {
      context.commit("setFormType", type);
    },
  },
  modules: {},
});
