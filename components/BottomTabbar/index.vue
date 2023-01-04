<template>
  <view class="bottom-tabbar">
    <view class="bottom-tabbar__list">
      <view v-for="(item, index) in nowIconList" :key="index" class="bottom-tabbar__item" :class="{ 'active': pageIndex === item.index }" @click="changePageIndex(item.index)">
        <view class="car-box">
          <image class="image" :src="handleIcon(item)" mode=""></image>
          <view v-if="carNum" :class="carNum < 10 ? 'icon-num' : 'more-num'">{{ carNum > 99 ? 99 : carNum }}</view>
        </view>
        <p class="text" :style="{ 'color': pageIndex === item.index ? item.activeColor : '#666666' }">{{ item.text }}</p>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'BottomTabbar', // 底部tab组件
  data() {
    return {
      consts: this.consts,
      iconList: [{ // 底部tab栏数据
        iconPath: this.tools.platformImg('/images/home/home'),
        selectedIconPath: this.tools.platformImg('/images/home/home-selected'),
        index: this.consts.INDEX_BOTTOM_TAB.HOME,
        text: '首页',
        activeColor: '#FF6940'
      }, {
        iconPath: this.tools.platformImg('/images/home/goods'),
        selectedIconPath: this.tools.platformImg('/images/home/goods-selected'),
        index: this.consts.INDEX_BOTTOM_TAB.GOODS,
        text: '商品',
        activeColor: '#FF6940'
      }, {
        iconPath: this.tools.platformImg('/images/home/order'),
        selectedIconPath: this.tools.platformImg('/images/home/order-selected'),
        index: this.consts.INDEX_BOTTOM_TAB.ORDER,
        text: '订单',
        activeColor: '#FF6940'
      }, {
        iconPath: this.tools.platformImg('/images/home/mine'),
        selectedIconPath: this.tools.platformImg('/images/home/mine-selected'),
        index: this.consts.INDEX_BOTTOM_TAB.MINE,
        text: '我的',
        activeColor: '#FF6940'
      }],
      showIconIndexs: [
        this.consts.INDEX_BOTTOM_TAB.HOME,
        this.consts.INDEX_BOTTOM_TAB.MINE
      ]
    }
  },
  computed: {
    userInfo() { return this.$store.getters.getUserInfo },
    pageIndex() { return this.$store.getters.getPageIndex },
    carNum() { return 0 },
    nowIconList() {
      return this.iconList.filter(item => this.showIconIndexs.includes(item.index))
    }
  },
  methods: {
    // 处理要展示哪个icon
    handleIcon(item) {
      if (this.pageIndex === item.index) {
        return item.selectedIconPath
      } else {
        return item.iconPath
      }
    },
    // 切换展示页面
    changePageIndex(index) {
      if (this.pageIndex === index) return
      this.$store.commit('home/setPageIndex', index)
    }
  }
}
</script>

<style lang="scss" scoped>
	.bottom-tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100rpx;
    z-index: 999;
		background: #FFFFFF;
		padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    box-shadow: 0 -2rpx 14rpx 0 rgba(0, 0, 0, 0.08);
    &__list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 14rpx 0;
      box-sizing: border-box;
    }
		&__item {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100rpx;
			.icon {
				display: block;
        font-size: 42rpx;
			}
      .image {
        width: 42rpx;
        height: 42rpx;
        display: block;
      }
			.text {
				color: #666666;
				font-size: 22rpx;
				margin-top: 6rpx;
			}
		}
		.car-box {
			position: relative;
			.icon-num {
				position:absolute;
				top:-13rpx;
				right: -16rpx;
				width:28rpx;
				height:28rpx;
				line-height: 28rpx;
				text-align: center;
				font-size:22rpx;
				font-weight:400;
				color:rgba(255,255,255,1);
				background: rgba(255,81,104,1);
				border:2rpx solid rgba(255, 255, 255, 1);
				border-radius:50%;
			}
			.more-num {
				padding: 2rpx 4rpx;
				width: 38rpx;
				height: 24rpx;
				color:#fff;
				line-height: 24rpx;
				font-size:22rpx;
				text-align: center;
				position:absolute;
				top:-10rpx;
				right: -27rpx;
				background: rgba(255,81,104,1);
				border:2rpx solid rgba(255, 255, 255, 1);
				border-radius:14rpx;
			}
		}
  }
</style>
