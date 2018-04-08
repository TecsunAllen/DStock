// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import StockList from './components/VueStockList.vue';
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            component:StockList
        }
    ]
})