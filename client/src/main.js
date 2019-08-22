import Vue from 'vue'
import App from './App.vue'
import router from './router'
import crono from 'vue-crono'
// import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import '~vuetify/src/stylus/main'



Vue.config.productionTip = false
Vue.use(crono)
// Vue.use(BootstrapVue)
Vue.use(Vuetify)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
