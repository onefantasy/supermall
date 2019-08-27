import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 给Vue原型添加总线属性，利用总线实现GoodsListItem和home的通信
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
