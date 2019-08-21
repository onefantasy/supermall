import Vue from 'vue'
import Router from 'vue-router'

// 1. 使用插件
Vue.use(Router)

// 导入各个部分
const home = () => import('views/home/home')
const cart = () => import('views/cart/cart')
const category = () => import('views/category/category')
const profile = () => import('views/profile/profile')

// 2. 实例化
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/car',
      component: cart
    },
    {
      path: '/sort',
      component: category
    },
    {
      path: '/my',
      component: profile
    },
  ],
  mode: 'history'
})

// 3. 导出
export default router

