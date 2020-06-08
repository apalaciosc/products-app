import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Productos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Product.vue")
  },
  {
    path: "/categories",
    name: "Categorías",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Category.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
