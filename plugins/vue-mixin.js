import Vue from 'vue'

Vue.mixin({
  computed: {
    $isMobile() {
      return this.$mq === 'xs'
    },
    $isTablet() {
      return ['xs', 'sm'].includes(this.$mq)
    }
  }
})
