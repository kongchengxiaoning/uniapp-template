import App from './App'
import store from './store'
import reuni from './common/scripts/reuni' // 重新系统方法
import shareInfo from './mixins/shareInfo' // 分享信息

// 初始化标题栏样式
store.commit('systemInfo/setNavBarConf')
// // 初始化小程序appID
store.commit('systemInfo/setAppId')
// 重写uni-app Api
reuni.init()

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// 设置全局分享信息mixin
Vue.mixin(shareInfo)
App.mpType = 'app'
const app = new Vue({
  store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.mixin(shareInfo)
  return {
    app
  }
}
// #endif
