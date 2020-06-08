<template>
  <div>
    <ul>
      <li
        v-for="n in projects"
        :key="n"
        @click="selectProject(n - 1)"
      >
        {{ n }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TabsProjects',
  props: {
    projects: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectProject(0)
  },
  methods: {
    selectProject(i) {
      this.currentIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="scss" module>

</style>
