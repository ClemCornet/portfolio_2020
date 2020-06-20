<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
    :class="[$style.container, {[$style.isActive]: isActive}]"
  >
    <slot name="leftSide" />
    <slot name="rightSide" />
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
export default {
  name: 'TabProject',
  components: {
    Grid
  },
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" module>
.container {
  display: none;
  opacity: 0;
  transition: all 1s linear;
}

.container {
  &.isActive {
    display: grid;
    opacity: 1;
  }
}
</style>
