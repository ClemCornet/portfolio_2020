export default {
  navigatePage({ commit, state: { duration } }, index) {
    setTimeout(() => {
      commit('UPDATE_INDEX', index)
    }, duration)
  },
  fadePage({ commit, state: { duration } }, index) {
    console.log(index)
    commit('FADE_PAGE', index - 1)
    setTimeout(() => {
      commit('FADE_PAGE', index)
    }, duration)
  }
}
