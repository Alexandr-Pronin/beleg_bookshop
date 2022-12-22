import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import Vuex from 'vuex'
import router from './router/router'
// import "primevue/resources/primevue.min.css";
// import "primevue/resources/themes/tailwind-light/theme.css";
import './index.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
   store,
   router,}).$mount('#app')

Vue.use(Vuex);