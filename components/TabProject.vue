<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TabProject',
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" module>

</style>
