export default {
  currentIndex(state) {
    return state.currentIndex
  },
  pages(state) {
    return state.pages
  },
  content: state => (currentPage) => {
    return state.pages.find(page => page.component === currentPage)
  },
  meta(state) {
    return state.meta
  },
  social(state) {
    return state.social
  }
}
