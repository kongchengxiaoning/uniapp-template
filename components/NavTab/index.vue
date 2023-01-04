<template>
  <view class="shortTab" :style="{'top':`${navBarConf.titleBarHeight + navBarConf.statusBarHeight + offsetHeight}px`}">
    <!-- 导航栏 -->
    <view class="navTab">
      <view
        v-for="(item, index) in tabTitle"
        :key="index"
        class="navTabItem"
        :class="index === currentStatus ? 'active' : ''"
        @click="handleTabClick(index)"
      >
        <view class="text">
          <text v-if="item.name">{{ item.name }}</text>
          <text v-if="item.num" class="unread"></text>
        </view>
      </view>
    </view>
    <!-- 下划线 -->
    <view class="underlineBox" :style="'transform:translateX(' + isLeft + 'px);width:' + isWidth + 'px'">
      <view class="underline"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'NavTabIndex',
  props: {
    tabTitle: {
      type: Array,
      default: () => []
    },
    offsetHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentStatus: 0, // 导航栏被点击
      isLeft: 0 // 导航栏下划线位置
    }
  },
  computed: {
    navBarConf() { return this.$store.getters.getNavBarConf }, // 获取设备头部安全区和标题高度
    isWidth() { return this.navBarConf.windowWidth / this.tabTitle.length }, // 宽度除以导航标题个数=一个导航所占宽度
    isLongWidth() { return this.navBarConf.windowWidth / 5 }
  },
  methods: {
    // 导航栏点击
    handleTabClick(index = 0) {
      this.$emit('change', +index) // 设置swiper的第几页
      this.currentStatus = +index // 设置导航点击了哪一个
      this.$nextTick(() => {
        this.isLeft = +index * this.isWidth // 设置下划线位置
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shortTab {
  width: 100%;
  height: auto;
  background: #ffffff;
  position: fixed;
  left: 0;
  z-index: 99;
  .navTab {
    display: flex;
    width: 100%;
    height: 80rpx;
    position: relative;
    .navTabItem {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 26rpx;
      color: #999999;
      
      .text {
        position: relative;
        
        .unread {
          position: absolute;
          right: -14rpx;
          top: -4rpx;
          width: 12rpx;
          height: 12rpx;
          background: #ED392F;
          border-radius: 50%;
        }
      }
      
      &.active {
        color: #333333;
        font-weight: bold;
      }
    }
  }

  .underlineBox {
    height: 6rpx;
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.3s;

    .underline {
      width: 30rpx;
      height: 6rpx;
      border-radius: 3rpx;
      background: #FF6940;
    }
  }
}
</style>
