//state
import Vue from 'vue';
import Vuex from 'vuex';
import StockManager from './services/stockManager.js';
//import webRender from './services/webRender.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    stockList:["SH000016"],
    stockData:[]
  },
  mutations: {
    initData(){
      //var test = new webRender(1,{});
      getStockDataByCode("SH000016");

    },
    renderCanvas(canvas,state){
      
    }

  }
});


async function getStockDataByCode(code){
  let data = await StockManager.queryAllStockData(code);
  let data2 = await StockManager.searFunds("国泰");
  let data3 = await StockManager.getFundInfo("160628");
  //StockManager.queryAllStockData("SH000016");
  store.state.stockData = data;
}

export default store;

