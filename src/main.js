import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router';
import router from './router.js'

import store from './store/index.js'

import  VueToastr from "vue-toastr"
    
Vue.use(VueRouter);
Vue.use(VueToastr);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
