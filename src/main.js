import Vue from 'vue'
import App from './App.vue'
import store from '../src/components/Store'
import routes from '../src/routes'
import VueRouter from 'vue-router'
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,

  render: h => h(App)
}).$mount('#app')
