export default {
  ['INCREMENT'](state) {
    state.counter = state.counter + 1
  },
  ['DECREMENT'](state) {
    state.counter = state.counter - 1
  }
}
