import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Rank from '@/components/pages/Rank'
import Search from '@/components/pages/Search'
import Detail from '@/components/pages/Detail'
import SongSheet from '@/components/pages/SongSheet'
Vue.use(Router);
var router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Home,
            name:'Home'
        },
        {
            path: '/rank/:id',
            component: Rank,
            name:'Rank'
        },
        {
            path: '/search',
            component: Search,
            name:'Search'
        },
        {
            path: '/play',
            component: Detail,
            name:'Detail'
        },
        {
            path: '/songSheet',
            component: SongSheet,
            name:'SongSheet'
        },
        {
            
            //其他路径重定向到首页
            path:'*',
            redirect: '/'
        }
    ]
});
export default router;
