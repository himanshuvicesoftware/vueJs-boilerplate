import Vuex from 'vuex'
import Vue from 'vue'
import * as counterS from './store/Counter/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counterS.store
  }
})
