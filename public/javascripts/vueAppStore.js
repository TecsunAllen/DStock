//state
import Vue from 'vue';
import Vuex from 'vuex';
import StockManager from './services/stockManager.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    stockList:["SH000016"],
    stockData:[]
  },
  mutations: {
    initData(){
      getStockDataByCode("SH000016");
    }
  }
});


async function getStockDataByCode(code){
  let data = await StockManager.queryAllStockData(code);
  //StockManager.queryAllStockData("SH000016");
  store.state.stockData = data;
}

export default store;

