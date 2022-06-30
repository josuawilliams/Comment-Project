import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faX } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = router
})
  
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faX)

new Vue({
  router,
  pinia,
  components: { App },
  render: h => h(App)
}).$mount('#app')
