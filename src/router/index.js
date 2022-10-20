import Vue from "vue";
import VueRouter from "vue-router";
import ElKhadem from "../views/el-khodam";
import homePage from "../views/home-page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: homePage,
  },
    {
      path: "/khodam",
      name: "ElKhadem",
      component: ElKhadem,
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
  });

export default router;