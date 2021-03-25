import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cats from "../views/Cats.vue";
import Dogs from "../views/Dogs.vue";
import Pets from "../views/Pets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats,
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs,
  },
  {
    path: "/pets/:specie/:id",
    name: "Pets",
    component: Pets,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
