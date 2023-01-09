import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import Vuex from 'vuex'
import router from './router/router'
import PrimeVue from 'primevue/config'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
   store,
   router,
   PrimeVue}).$mount('#app')

Vue.use(Vuex);
Vue.use(PrimeVue);