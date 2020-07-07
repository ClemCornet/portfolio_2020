export default {
  UPDATE_INDEX(state, index) {
    state.currentIndex = index
  },
  FADE_PAGE(state, index) {
    const { pages } = state
    pages[index].active = !pages[index].active
  }
}
