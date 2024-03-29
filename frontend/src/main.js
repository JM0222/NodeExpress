import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {router}  from './routes/index.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
