import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router'
import elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Golbal from './Golbal'

Vue.use(VueRouter);
Vue.use(elementui,{ size: 'small', zIndex: 3000 });
Vue.prototype.axios = axios;
Vue.prototype.Golbal = Golbal;

//生产环境控制台提示
Vue.config.productionTip = true;

new Vue({
    el:'#app',
        //h => h(App)
    data:{
        message:'ok'
    },
    router,
    render: function(a){
        return  a(App);
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
