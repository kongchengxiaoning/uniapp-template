<template>
  <view class="warp">
    <nav-bar :is-back="false" :title="pageTitle" bg="#FFFFFF" title-color="#000000" back-color="#000000"></nav-bar>
    
    <mescroll-body
      ref="mescrollRef"
      :down="downOption"
      :safearea="true"
      :top="`${headerTop}px`"
      :bottom="0"
      :up="upOption"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
    >
      <image class="logo" :src="platformImg('/images/logo')"></image>
      <view class="text-area">
        <text class="title">{{ pageTitle }}</text>
        <text class="text" @click="openRichText">富文本</text>
      </view>
    </mescroll-body>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'
import MescrollBody from '@/components/Mescroll/mescroll-body.vue'
import MescrollMixins from '@/components/Mescroll/mescroll-mixins'
import { platformImg } from '@/utils/tools'
import { evtrack } from '@/api/common'

export default {
  components: {
    NavBar,
    MescrollBody
  },
  mixins: [MescrollMixins],
  data() {
    return {
      platformImg,
      pageTitle: 'Hello',
      // 下拉刷新配置
      downOption: {
        use: true,
        auto: false
      },
      // 上拉加载配置
      upOption: {
        use: true,
        auto: true,
        noMoreSize: 5,
        empty: {
          // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId:	'prizeRecord', // 父布局的id (1.3.5版本支持传入dom元素)
          tip: '暂无数据～' // 提示
        }
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
.logo {
  height: 200rpx;
  width: 200rpx;
  display: block;
  margin: 50rpx auto;
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
