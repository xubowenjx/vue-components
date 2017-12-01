import Vue from 'vue'
import CountUp from './components/CountUp/index.js'
import Button from './components/Button/index.js'
 const xbw={
  CountUp,
  Button
 };
 const install = function(Vue, opts = {}) {
  

  Object.keys(xbw).forEach(key => {
      Vue.component(key, xbw[key]);
  });
 
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
 export default Object.assign(xbw, {install});