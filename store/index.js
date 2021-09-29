import createPersistedState from 'vuex-persistedstate'
import getters from './getters'

import systemInfo from '@/store/modules/systemInfo' // 系统信息

// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif
// #ifdef VUE3
import { createStore } from 'vuex'
const store = createStore({
// #endif
  modules: {
    systemInfo
  },
  getters,
  plugins: [
    // 可以有多个持久化实例
    createPersistedState({
      key: `uniappMobile`, // 状态保存到本地的 key
      paths: [], // 要持久化的状态，在state里面取
      storage: { // 存储方式定义
        getItem: (key) => uni.getStorageSync(key), // 获取
        setItem: (key, value) => uni.setStorageSync(key, value), // 存储
        removeItem: (key) => uni.removeStorageSync(key) // 删除
      }
    })
  ]
})

export default store
