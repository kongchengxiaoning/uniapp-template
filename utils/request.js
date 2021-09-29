import encryption from '@/libs/encryption/index'
import consts from '@/common/scripts/consts'
import store from '@/store'

export default class Request {
  http(url, data = {}, method) {
    // 返回promise
    return new Promise((resolve, reject) => {
      const userInfo = store.getters.getUserInfo || {}
      const header = {
        authtoken: userInfo.authtoken ? userInfo.authtoken : '',
        client: consts.CLIENT,
        clientplatform: consts.CLIENT_PLATFORM
      }

      // 获取加密数据
      const syetemInfo = store.state.systemInfo
      const timestamp = parseInt(new Date().getTime() / 1000)
      const encrypt_data = {
        appid: syetemInfo.appId,
        timestamp
      }
      // aes加密
      data.encrypt_data = encryption.Encrypt(JSON.stringify(encrypt_data))

      // 请求
      uni.request({
        url: `${consts.SERVER_PATH}${url}`,
        data: data,
        method: method,
        header: header,
        success: (res) => {
          if ([404, 500].includes(res.statusCode)) {
            uni.showToast({
              title: '服务异常，请稍后再试',
              icon: 'none',
              duration: 15e2
            })
            reject()
          }

          const code = res.data.code

          switch (code) {
            case '0000':
              resolve(res.data)
              break
            case '9999':
              store.commit('setUserInfo', null)
              reject(res.data)
              break
            default:
              uni.showToast({
                title: res.data.msg,
                duration: 2000,
                icon: 'none'
              })
              reject(res.data)
          }
        },
        fail: (res) => {
          reject(res)
        }
      })
    })
  }
}
