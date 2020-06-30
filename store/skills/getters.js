export default {
  skills(state) {
    return state.skills
  },
  collapsedSkill: state => (idx) => {
    return state.skills[idx]
  }
}
