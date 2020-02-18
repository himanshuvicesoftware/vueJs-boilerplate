import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Register from "./pages/register.vue";
import Login from "./pages/login.vue";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/register", component: Register },
  { path: "/login", component: Login }
];

export default routes;
