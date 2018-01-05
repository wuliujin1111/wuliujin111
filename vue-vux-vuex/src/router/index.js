import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//3、引入路由规则
import routes from "./routes.js";

//4、实例化VueRouter
const router = new VueRouter({
  routes
});

export default router;
