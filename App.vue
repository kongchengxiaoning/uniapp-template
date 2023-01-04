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
  min-width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: $page-bg-color;
}
::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
