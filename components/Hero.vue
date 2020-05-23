<template>
  <div>
    <slot name="image" />
    <slot />
    <slot name="subtitle" />
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>

</style>
