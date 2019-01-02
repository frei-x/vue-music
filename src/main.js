import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router'
import elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Golbal from './Golbal'
import vuex from 'vuex';
import * as serviceWorker from './serviceWorker';
serviceWorker.register();
Vue.use(VueRouter);
Vue.use(vuex);
Vue.use(elementui, { size: 'small', zIndex: 3000 });
Vue.prototype.axios = axios;
Vue.prototype.Golbal = Golbal;

//生产环境控制台提示
Vue.config.productionTip = true;
//axios默认配置
//实例中请求地址是绝对路径barseUrl会被覆盖,'/'路径会生效
axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Origin'] = 'localhost:8080';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // console.log('拦截了请求前');
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log('取到数据');
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.error(error)
    return Promise.reject(error);
});

const store = new vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        // mutations中注册的函数第一个参数是Vuex中的state,第二个参数才是其他地方commit时传递的参数
        // 共享进入歌单详情的函数
        funGoSheetDetail(state,id) {
            router.push({
                path: '/songSheet',
                name: 'SongSheet',
                query: {
                    id: id,
                }
            });
        },
        funGoSongDetail(state,id){
            router.push({
                path: '/play',
                name: 'Detail',
                query: {
                    id: id,
                }
            });
        }
    }
})

new Vue({
    el: '#app',
    //h => h(App)
    data: {
        message: 'ok'
    },
    router,
    store,
    render: function (a) {
        return a(App);
    },
    beforeCreate: function () {

    },
    created: function () {

    },
    beforeMount: function () {

    },
    mounted: function () {

    },
    beforeUpdate: function () {

    },
    updated: function () {

    },
    beforeDestroy: function () {

    },
    destroyed: function () {

    }
})//.$mount('#app');//手动挂载,会再次执行一次
