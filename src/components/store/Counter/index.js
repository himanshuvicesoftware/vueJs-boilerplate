import mutations from './mutations'
import getters from './getters'
import * as actions from './actions'
import { buildActionsTypes } from '../vuexUtilities'
import { buildGettersTypes } from '../vuexUtilities'

const state = {
  counter: 0
}

const namespaced = true

const MODULE_NAME = 'counter'

export const store = {
  state,
  namespaced,
  mutations,
  actions,
  getters
}

export const actionTypes = buildActionsTypes(actions, MODULE_NAME)
export const getterTypes = buildGettersTypes(getters, MODULE_NAME)
