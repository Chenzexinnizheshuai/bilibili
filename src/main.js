import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@css/main.scss'
import myaxios from '@util/axios'
import '@util/lib'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.myaxios = myaxios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default App
