<template>
  <div>
    <ul :class="[$style.nav, {[$style.isActive]: active}]">
      <li
        v-for="n in projects"
        :key="n"
        :class="[$style.itemNav, {[$style.isActive]: n - 1 === currentIndex}]"
        @click="selectProject(n - 1)"
      />
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
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      tabs: [],
      isActive: false
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectProject(0)
    this.isActive = this.active
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
.nav {
  display: flex;
  position: relative;
  opacity: 0;
  width: 35%;
  &:after {
    @include overlayHorizontal()
  }
}

.itemNav {
  flex: 1;
  height: 10px;
  border: solid 1px $greenmain;
  margin-right: spacer(2);
  &.isActive {
    background: $greenmain;
  }
}

.isActive {
  &.nav {
    opacity: 1;
    &:after {
    @include overlayHorizontalHide()
    }
  }
}
</style>
