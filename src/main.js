import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import './assets/border.css'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios
Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
