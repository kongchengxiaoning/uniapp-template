<script>
export default {
  onLaunch: function(option = {}) {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
.warp {
  min-height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: $page-bg-color;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
