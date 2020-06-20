export const activeProject = {
  data() {
    return {
      active: false
    }
  },
  methods: {
    isActive() {
      if (this.name === this.currentProject) {
        setTimeout(() => {
          this.active = !this.active
        }, 500)
      }
    }
  }
}
