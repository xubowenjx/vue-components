import Vue from 'vue'
import CountUp from './components/CountUp/index.js'
import Button from './components/Button/index.js'
 const components=[
  CountUp,
  Button
 ];
 const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });

};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
export default{
  CountUp
}