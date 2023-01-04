<template>
  <view class="warp">
    <nav-bar :title="pageTitle" bg="#F1F1F1" title-color="#333333" back-color="#333333"></nav-bar>

    <view class="rich-text" :style="{ paddingTop: `${headerTop}px` }">
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
  computed: {
    navBarConf() { // 获取设备头部安全区和标题高度
      return this.$store.getters.getNavBarConf
    },
    headerTop() { // 获取顶部高度
      return this.navBarConf.titleBarHeight + this.navBarConf.statusBarHeight
    }
  },
  onLoad(option) { // 页面初次加载
  }
}
</script>

<style lang="scss" scoped>
.rich-text {
  padding: 24rpx;

  .text {
    font-size: 26rpx;
    color: #333333;
  }
}
</style>
