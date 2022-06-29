import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { markRaw } from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
  

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
