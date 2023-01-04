<template>
  <view class="header" :style="{ height: `${navBarConf.titleBarHeight}px`, 'padding-top': `${navBarConf.statusBarHeight}px`, 'background': bg }">
    <view v-if="isBack && backType === 1" class="header-back extend-click" @click.stop="back">
      <span class="iconfont" :style="{ color: backColor }">&#xe60b;</span>
    </view>
    <view v-if="isBack && backType === 2" class="header-back extend-click" @click.stop="openHome">
      <span class="iconfont" :style="{ color: backColor }">&#xe60b;</span>
    </view>
    <view v-if="title" class="header-title" :style="{ color: titleColor }">
      {{ title }}
    </view>
  </view>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    // 标题栏文字
    title: {
      type: String,
      default: '#333333'
    },
    // 标题栏文字颜色
    titleColor: {
      type: String,
      default: '#333333'
    },
    // 标题栏背景色
    bg: {
      type: String,
      default: '#FFFFFF'
    },
    // 返回按钮是否展示
    isBack: {
      type: Boolean,
      default: true
    },
    // 返回按钮颜色
    backColor: {
      type: String,
      default: '#333333'
    },
    // 导航类型
    backType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
    }
  },
  computed: {
    navBarConf() {
      return this.$store.getters.getNavBarConf
    }
  },
  methods: {
    // 回到上一页
    back: function() {
      uni.navigateBack({
        delta: 1
      })
    },
    // 回到首页
    openHome: function() {
      uni.reLaunch({
        url: '/pages/main-pack/index/index'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.header {
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;

  .header-title {
    position: absolute;
    left: 50%;
    font-size: 34rpx;
    font-weight: bold;
    transform: translateX(-50%);
  }

  .header-back {
    position: absolute;
    left: 24rpx;
    .iconfont {
      font-size: 56rpx;
    }
  }
}
</style>
