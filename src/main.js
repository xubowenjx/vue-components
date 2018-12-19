/* eslint-disable */
import Vue from 'vue'
import CountUp from './components/CountUp/index.js'
import Button from './components/Button/index.js'
const xbw = {
  CountUp,
  Button
}
const install = function(Vue, opts = {}) {
  console.log('install', opts)
  if (opts.type == 'CDN') {
    Object.keys(xbw).forEach(key => {
      let name = 'i' + key.replace(/([A-Z])/g, '-$1').toLowerCase()
      Vue.component(name, xbw[key])
    })
  } else {
    Object.keys(xbw).forEach(key => {
      Vue.component(key, xbw[key])
    })
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue, { type: 'CDN' });
}
export default Object.assign(xbw, { install })
