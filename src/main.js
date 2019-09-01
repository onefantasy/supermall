import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

// 给Vue原型添加总线属性，利用总线实现GoodsListItem和home的通信
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

// 安装 toast插件
Vue.use(toast);

// 使用图片懒加载
Vue.use(VueLazyLoad);

// 决解移动端300ms的延迟问题
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
