import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './actions'
import getters from './getters'

// 1. 安装
Vue.use(Vuex);

const state = {
  cart:[],
  pInfo:{
    id: '',
    isLogin: false,
    money: 0,
    discount: 0,
    point: 0,
    name: '',
    phone: '',
    img: '',
    address: ''
  },
  defaultPInfo:{
    id: '',
    isLogin: false,
    money: 0,
    discount: 0,
    point: 0,
    name: '',
    phone: '',
    img: '',
    address: ''
  }
};

// 2. 实例化对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

// 3. 挂载
export default store;
