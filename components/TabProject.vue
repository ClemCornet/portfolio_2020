<template>
  <transition
    name="fade"
  >
    <div
      v-if="isActive"
      :class="$style.project"
    >
      <slot name="leftSide" />
      <slot name="rightSide" />
    </div>
  </transition>
</template>

<script>
// import Flex from '@/components/Flex.vue'
export default {
  name: 'TabProject',
  components: {
    // Flex
  },
  data() {
    return {
      isActive: true
    }
  }
}
</script>
<style lang="scss" module>
.project {
  display: flex;
}
</style>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
