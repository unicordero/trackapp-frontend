import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.use(VueAxios, axios)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
