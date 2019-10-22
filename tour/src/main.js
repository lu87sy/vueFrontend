import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import faskClick from 'fastclick'

Vue.config.productionTip = false
faskClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
