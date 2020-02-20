import * as types from './Counter.mutations.types'

export const increment = ({ commit }) => {
  commit(types.COUNTER_INCREMENT)
}

export const decrement = ({ commit }) => {
  commit(types.COUNTER_DECREMENT)
}
