<template>
  <view class="warp">
    <web-view :src="url"></web-view>
  </view>
</template>

<script>
export default {
  name: 'WebView',
  data() {
    return {
      url: ''
    }
  },
  onLoad(option) { // 页面初次加载
    this.url = option.url
  }
}
</script>

<style lang="scss" scoped>

</style>
