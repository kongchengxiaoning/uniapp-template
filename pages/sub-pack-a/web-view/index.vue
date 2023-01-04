<template>
  <view class="warp">
    <web-view :src="url"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  onLoad(option) { // 页面初次加载
    this.url = decodeURIComponent(option.url)
  }
}
</script>

<style lang="scss" scoped>

</style>
