import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './actions'
import getters from './getters'

// 1. 安装
Vue.use(Vuex);

const state = {
  cart:[],
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
