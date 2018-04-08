//state
import Vue from 'vue';
import Vuex from 'vuex';
import StockManager from './services/stockManager.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    queryShareCodes:[],
    todayShareCodes: []
  },
  mutations: {
    initData(){
      StockManager.queryAllStockData("SH000016");
    }
  }
});

export default store;

