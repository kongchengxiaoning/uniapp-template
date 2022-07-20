<template>
  <view class="pop-confirm" @touchmove.stop.prevent>
    <view class="modal">
      <view class="title">{{ title }}</view>
      <view class="modal-bottom">
        <button v-if="!noCancel" class="modal-bottom__button cancel" @click="$emit('cancel')">{{ cancelText }}</button>
        <button class="modal-bottom__button confirm" @click="$emit('confirm')">{{ confirmText }}</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'PopConfirm',
  props: {
    title: {
      type: String,
      default: '确认要执行此操作吗？'
    },
    noCancel: { // 是否展示取消对应的按钮
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-confirm {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.modal {
  width: 570rpx;
  height: 227rpx;
  border-radius: 16rpx;
  background: #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 83rpx;
  .title {
    font-size: 32rpx;
    color: #333333;
    text-align: center;
    font-weight: 500;
  }
  
  .modal-bottom {
    margin: 64rpx 30rpx 0;
    display: flex;
    justify-content: space-between;
    
    &__button {
      border: none;
      box-sizing: border-box;
      width: 240rpx;
      height: 72rpx;
      border-radius: 36rpx;
      font-size: 34rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
    }

    .cancel {
      border: 1px solid rgba(153, 153, 153, 1);
      color: rgba(102, 102, 102, 1);
      background-color: #ffffff;
    }

    .confirm {
      margin: 0 auto;
      background-color: #4cd964;
      color: #ffffff;
    }
  }
}
</style>
