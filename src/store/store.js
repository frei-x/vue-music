import Vue from 'vue'
import vuex from 'vuex';
Vue.use(vuex);
import router from '@/router'
const store = new vuex.Store({
    state: {
        count: 0,
        showNav:true,
        // 当前播放的歌曲封面图片(播放背景/播放旋转头像)
        songSrcPic:{
            src:'',
            pic:''
        }
    },
    mutations: {
        // mutations中注册的函数第一个参数是Vuex中的state,第二个参数才是其他地方commit时传递的参数
        // 共享进入歌单详情/歌曲详情的函数
        funGoSheetDetail(state,id) {
            router.push({
                path: '/songSheet',
                name: 'SongSheet',
                query: {
                    id: id,
                }
            });
        },
        funGoSongDetail(state,obj){
            router.push({
                path: '/play',
                name: 'Detail',
                query: {
                    id: obj.songId,
                    img:obj.img
                }
            });
        },
        // 控制是否显示导航
        funisShowNav(state){
            state.showNav = !state.showNav;
            //console.log(state.showNav);
        },
        // 全局共享的,当前播放歌曲的url/pic
        funGolbalSongSrcPic(state,param){
            state.songSrcPic={
                src:`https://music.163.com/song/media/outer/url?id=${param.songId}.mp3`,
                pic:param.pic
            }
        }

    }
});
export default store;