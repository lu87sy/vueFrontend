import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import faskClick from 'fastclick'
import '@/assets/style/iconfont.css'

Vue.config.productionTip = false
faskClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
