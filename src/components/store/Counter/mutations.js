import * as types from './Counter.mutations.types'

export default {
  [types.COUNTER_INCREMENT](state) {
    state.counter++
  },
  [types.COUNTER_DECREMENT](state) {
    state.counter--
  }
}
