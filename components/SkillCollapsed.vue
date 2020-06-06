<template>
  <div>
    <div @click="reduce">
      -
    </div>
    <frontend-illu :class="$style.illustration" />
    <backend-illu :class="$style.illustration" />
    <DesignIllu :class="$style.illustration" />
  </div>
</template>

<script>
import FrontendIllu from '../assets/illustrations/Frontend.vue'
import BackendIllu from '../assets/illustrations/Backend.vue'
import DesignIllu from '../assets/illustrations/Design.vue'

export default {
  name: 'SkillCollapsed',
  components: {
    FrontendIllu,
    BackendIllu,
    DesignIllu
  },
  methods: {
    reduce() {
      this.$emit('reduce')
    }
  }
}
</script>

<style lang="scss" module>
.illustration {
  width: 100px;
  height: 50px;
}
</style>
