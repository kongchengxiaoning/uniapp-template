/* 分享信息mixin */
export default {
  onShareAppMessage() {
    // 默认设置分享数据
    return {
      title: '标题',
      content: '分享描述',
      path: `/pages/main-pack/index/index?share_id=${1}`,
      imageUrl: 'http://temp.im/230x230'
    }
  }
}

