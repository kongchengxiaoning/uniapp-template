// 开发环境为true 生产环境为false
const DEBUG = true 

// 请求接口地址
let SERVER_PATH = DEBUG ? 'https://yx-cs.hxfybj.net' : 'https://yx.hxfybj.net'

// 当前应用平台
let CLIENT_PLATFORM = ''

// #ifdef H5
SERVER_PATH = process.env.NODE_ENV === 'development' ? '/prefix' : location.origin + '/api'
CLIENT_PLATFORM = 'h5'
// #endif

// #ifdef MP-WEIXIN
CLIENT_PLATFORM = 'wechat'
// #endif

// 基础信息
const appiInfo = {
  IS_PREVIEW: false, // 是否预览
  CLIENT: uni.getSystemInfoSync().platform, // 设备类型
  CLIENT_PLATFORM, // 当前应用平台
  VERSION: '1.0.0', // 版本号
  DEBUG, // 是否是开发模式
  SERVER_PATH, // 请求接口地址
  IMG_ERROR: '/images/error/error', // 加载失败默认图片
  PAGESIZE: 10, // 分页 每次加载的数据量
  TIMEOUT: 120000 // 接口超时时间 毫秒
}

export default {
  ...appiInfo
}
