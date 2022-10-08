import Vue from "vue";
import VueRouter from "vue-router";
import ElKhadem from "../views/el-khodam";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name: "ElKhadem",
      component: ElKhadem,
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
  });

export default router;