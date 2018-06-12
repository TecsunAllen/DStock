// 导入组件
import Vue from 'vue';
import store from './vueAppStore.js';
import router from './routes.js';

var app = new Vue({
    name:'AppContainee',
    router,
    el: '#AppContainer',
    store,
    template: '<router-view></router-view>'
});

store.commit("initData");