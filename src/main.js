import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

axios.defaults.baseURL='http://localhost:8088/elm/'
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
