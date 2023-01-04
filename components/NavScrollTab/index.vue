<template>
  <view class="scroll-tab" :style="{'top':`${navBarConf.titleBarHeight + navBarConf.statusBarHeight + offsetHeight}px`}">
    <scroll-view scroll-x scroll-with-animation :scroll-into-view="`scroll-${currentStatus}`" class="scroll-x">
      <view v-for="(item, index) in tabTitle" :key="index" :id="`scroll-${index}`" :class="{ 'active': currentStatus == index }" @click="handleTabClick(index)" class="scroll-tab__item">
        <text v-if="item.name">{{ item.name }}</text>
        <text v-if="item.num" class="unread"></text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'NavScrollTabIndex',
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
      currentStatus: 0 // 导航栏被点击
    }
  },
  computed: {
    navBarConf() { return this.$store.getters.getNavBarConf }
  },
  methods: {
    // 导航栏点击
    handleTabClick(index = 0) {
      this.$emit('change', +index)
      this.currentStatus = +index
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-tab {
  width: 100%;
  height: 86rpx;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #FFFFFF;
  
  .scroll-x {
    height: 100%;
    flex-direction: row;
    white-space: nowrap;
    
    .scroll-tab__item {
      height: 100%;
      line-height: 82rpx;
      display: inline-block;
      vertical-align: top;
      flex-wrap: nowrap;
      padding:0 24rpx;
      font-size: 26rpx;
      color: #999999;
      position: relative;
      
      .unread {
        position: absolute;
        right: 10rpx;
        top: 18rpx;
        width: 12rpx;
        height: 12rpx;
        background: #ED392F;
        border-radius: 50%;
      }
      
      &:first-child {
        margin-left: 20rpx;
      }
      
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 30rpx;
        height: 6rpx;
        background: #FF6940;
        border-radius: 3rpx;
        display: none;
      }
    }
    
    .active{
      font-weight: bold;
      color: #333333;
      
      &::after {
        display: block;
      }
    }
  }
}
</style>
