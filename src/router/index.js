import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import About from "../views/About.vue";
import SorryPage from "../views/SorryPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/products", name: "Categories", component: Categories },
  // /products/:category is "dynamic route" because it is part of the products component
  {
    path: "/products/:category",
    name: "CategoryProducts",
    component: Categories,
  },
  {
    path: "/products/:category/:id",
    name: "ProductDetails",
    component: () => import("../views/ProductDetails.vue"),
  },
  { path: "/about", name: "About", component: About },
  { path: "/sorry", component: SorryPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
