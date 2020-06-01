export default {
  navigatePage({ commit, state: { duration } }, index) {
    // commit('ACTIVATE_PAGE', index)

    setTimeout(() => {
      commit('UPDATE_INDEX', index)
    }, duration)
  }
}
