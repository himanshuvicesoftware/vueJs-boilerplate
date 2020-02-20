export const buildActionsTypes = (actions, moduleName) =>
  Object.keys(actions).reduce((acc, cur) => {
    acc[cur] = `${moduleName}/${cur}`
    return acc
  }, {})

export const buildGettersTypes = (getters, moduleName) =>
  Object.keys(getters).reduce((acc, cur) => {
    acc[cur] = `${moduleName}/${cur}`
    return acc
  }, {})