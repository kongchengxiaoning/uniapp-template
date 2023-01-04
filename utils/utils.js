import store from '@/store'

// 处理金额 截取为数组
export const cashArr = (cash = '-.--') => {
  const cashAr = parseFloat(cash).toFixed(2).split('.')
  cashAr[0] = cashAr[0] + '.'
  return cashAr
}

// 时间戳转换为年月日
export const changeData = (time) => {
  time = utils.accMul(time, 1000)
  var timer = new Date(time)
  var year = timer.getFullYear()
  var month = timer.getMonth() + 1
  var date = timer.getDate()
  const text = [year, month, date].join('.')
  return text
}

// 校验是否登陆
export const isLogin = () => {
  const userInfo = store.getters.getUserInfo
  if (userInfo && userInfo.id) {
    return true
  } else {
    return false
  }
}

/**
 * @description 活动页跳转处理
 */
export const openCustomLink = (item, flag) => {
  // 获取当前配置的链接
  const link = item.link
  if (!link) {
    return
  }
  if (link.includes('http://') || link.includes('https://')) {
    // H5页面
    uni.navigateTo({
      url: `/pages/sub-pack-a/web-view/index?url=${encodeURIComponent(link)}`
    })
  } else {
    // 页面类型及参数
    const params = link.split('/')
    if (params[0] === 'goods') {
      isLogin()
      console.log(params[0])
    }
  }
}
