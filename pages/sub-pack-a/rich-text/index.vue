<template>
  <view class="warp">
    <nav-bar :title="pageTitle" bg="#FFFFFF" title-color="#000000" back-color="#000000"></nav-bar>
    <view class="rich-text">
      <rich-text class="text" :nodes="explain.content || []"></rich-text>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      pageTitle: '富文本',
      explain: {
        title: '富文本',
        content: '<p>123</p>'
      }
    }
  },
  onLoad(option) { // 页面初次加载
  }
}
</script>

<style lang="scss" scoped>
.rich-text {
  padding: 24upx;
  .text {
    font-size: 26upx;
    color: #333333;
  }
}
</style>

