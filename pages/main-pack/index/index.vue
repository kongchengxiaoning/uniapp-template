<template>
  <view class="warp">
    <nav-bar :isBack="false" :title="pageTitle" bg="#FFFFFF" title-color="#000000" back-color="#000000"></nav-bar>
    <image class="logo" :src="platformImg('/images/logo')"></image>
    <view class="text-area">
      <text class="title">{{ pageTitle }}</text>
      <text class="text" @click="openRichText">富文本</text>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'
import { platformImg } from '@/common/scripts/tools'
  
export default {
  components: {
    NavBar
  },
  data() {
    return {
      platformImg,
      pageTitle: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {
    openRichText() {
      uni.navigateTo({
        url: '/pages/sub-pack-a/rich-text/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.warp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
  .text {
    color: #F0AD4E;
  }
}
</style>
