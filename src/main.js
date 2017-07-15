// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueProgressBar from 'vue-progressbar'
import App from './App'

Vue.use(VueResource)
Vue.use(VueProgressBar, {
  color: '#34a58e',
  height: '4px'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
