/* eslint-disable */
import Vue from 'vue'

Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.toString().toUpperCase()
  return value
})
