<template>
  <img :src="src" v-bind="$attrs">
</template>

<script>
export default {
  name: 'Illustration',
  props: {
    name: {
      type: String,
      required: true
    },
    fallback: {
      type: String,
      default: 'frontend'
    },
    center: Boolean
  },
  computed: {
    src() {
      try {
        // eslint-disable-next-line import/no-dynamic-require, global-require, prefer-template
        return require('@/assets/illustrations/' + this.name + '.svg')
      } catch (e) {
        // eslint-disable-next-line import/no-dynamic-require, global-require, prefer-template
        return require('@/assets/illustrations/' + this.fallback + '.svg')
      }
    }
  }
}
</script>
