/*import Vue from "vue";
import App from "./App.vue";
import store from "../src/components/Store";
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
const router = new VueRouter({
  mode: "history",
  routes
});
new Vue({
  store,
  router,

  render: h => h(App)
}).$mount("#app");
*/
import Vue from "vue";
import App from "./App.vue";
import store from "../src/components/Store";
import routes from "../src/routes";
import VueRouter from "vue-router";
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  store,
  router,

  render: h => h(App)
}).$mount("#app");
