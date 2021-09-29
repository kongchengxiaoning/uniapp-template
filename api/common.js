
import Request from '@/utils/request'
const request = new Request().http

/**
 * @description 数据统计
 */
export const evtrack = (data = {}) => {
  return request('/evtrack/index/eveck', data, 'POST')
}
