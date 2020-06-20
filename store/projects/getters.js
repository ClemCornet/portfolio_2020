export default {
  projects(state) {
    return state.projects
  },
  currentProject: state => (index) => {
    return state.projects[index]
  }
}
