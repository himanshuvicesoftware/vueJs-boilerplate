import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Register from './pages/register.vue'
import Login from './pages/login.vue'
import Count from './pages/Count.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/count', component: Count }
]

export default routes
