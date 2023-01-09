
const state = {
  userInfo: null
}
const mutations = {
  setUserInfo(state, userInfo) { // 用户信息
    state.userInfo = userInfo
  }
}
const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
