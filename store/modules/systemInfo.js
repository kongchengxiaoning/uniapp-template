const state = {
  // 平台小程序appId
  appId: '',
  navBarConf: {},
  navBarHeightRpx: 0
}

const mutations = {
  // 获取标题栏高度
  setNavBarConf(state) {
    uni.getSystemInfo({
      success: function(res) {
        const titleBarHeight = 44
        state.navBarConf = Object.assign({ titleBarHeight }, res)
        state.navBarHeightRpx = 750 / res.screenWidth * (titleBarHeight + res.statusBarHeight)
      }
    })
  },
  // 设置appId
  setAppId(state) {
    // #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ
    state.appId = uni.getAccountInfoSync().miniProgram.appId
    // #endif
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

