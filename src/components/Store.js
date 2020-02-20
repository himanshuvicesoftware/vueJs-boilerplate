import Vuex from 'vuex'
import Vue from 'vue'
import * as counter from './store/Counter/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counter.store
  }
})
