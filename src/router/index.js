import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/home/index";
import { HomeRoute, HomeRouteName } from "./constants";

Vue.use(VueRouter);

const routes = [
  {
    path: HomeRoute,
    name: HomeRouteName,
    component: HomePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
