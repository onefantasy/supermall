import Vue from 'vue'
import Router from 'vue-router'

// 1. 使用插件
Vue.use(Router)

// 导入各个部分
const home = () => import('views/home/home')
const cart = () => import('views/cart/cart')
const category = () => import('views/category/category')
const profile = () => import('views/profile/profile')
const detail = () => import('views/detail/detail')
const login = () => import('views/login/login')
const pDetail =() => import('views/pDetail/pDetail')
const register = () => import('views/register/register')

// 解决错误：Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
// 原因，点击后跳转到与当前页面相同的路由
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
    {
      path: '/detail/:id',
      component: detail
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/pDetail',
      component: pDetail,
    },
    {
      path: '/register',
      component: register
    }
  ],
  mode: 'history'
})

// 3. 导出
export default router

