<template>
  <div id="app">
    <!--进入离开歌曲详情播放页时控制导航显示(有过渡) -->
    <transition name="enterSongDetail" modth="out-in">
    <!-- :gutter="20" 间隔 -->
    <el-row id="header_nav" :gutter="0" v-show="showNav">
      <el-col :span="8" class="header_nav_item">
        <router-link to="/" exact @click.native="fun_app($event)" tag="div">推荐音乐</router-link>
      </el-col>
      <el-col :span="8" class="header_nav_item">
        <router-link to="/rank" @click.native="fun_app($event)" tag="div">排行榜</router-link>
      </el-col>
      <el-col :span="8" class="header_nav_item">
        <router-link to="/search" @click.native="fun_app($event)" tag="div">搜索</router-link>
      </el-col>
    </el-row>
    </transition>
    <!-- modth = 'out-in' 动画时间顺序 -->
    <!-- <router-view>外层加div 设置为相对定位,内部视图为绝对定位,
    既可以撑开html,路由切换动画也不会因为元素脱离文档流而瞬间上下抖动-->
    <!--keep-alive 缓存路由视图,被缓存的视图组件不会被销毁/重载,不会触发生命周期,但可以触发组建内部路由钩子  -->
    <!-- <div id="router-view"> -->
    <transition name="changePage" modth="out-in">
      <!-- exclude = 不缓存的路由 -->
      <keep-alive exclude="SongSheet">
        <router-view style=""></router-view>
      </keep-alive>
    </transition>
     <Myaudio :src="songSrcPic.src" @loaded="loaded"></Myaudio>
    <!-- </div> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Myaudio from "@/components/musicPlayer.vue";
export default {
  name: "App",
  // 修改data中的值会触发绑定的视图更新,但修改data依赖的值,不会触发绑定的视图更新,data只初始化一次
  data() {
    return {
   
    }
  },
  components: {
    HelloWorld,
    Myaudio
  },
  created() {
    
  },
  computed: {
      showNav:function(){
         return this.$store.state.showNav
      },
      songSrcPic:function(){
         return this.$store.state.songSrcPic 
      }
  },
  methods: {
    fun_app(e) {
      // console.log(e.target.innerHTML);
    },
    loaded(param){
      console.log(param);
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  width: 100%;
  height: auto;
  background: #eee;
  -ms-overflow-style: none;
  /*火狐下隐藏滚动条*/
  overflow: -moz-scrollbars-none;
}
body::-webkit-scrollbar {
  display: none;
  transition: all 1s;
}

#app {
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eee;
  font-size: 16px;
}
#header_nav {
  position: absolute;
  width: 100%;
  height: 0.45rem;
  border-bottom: 1px solid #ddd;
  padding: 5px 6px 0px 6px;
  font-size: 16px;
  color: black;
  margin-top: 20px;
}
.router-link-active {
  color: #d33a31 !important;
  text-align: center;
  box-sizing: content-box;
}
.router-link-active::after{
  content: "";
  display: block;
  border-bottom: 2px solid #d33a31;
  animation: nav 0.5s cubic-bezier(0.165, 0.84, 0.44, 0.95) forwards;
  text-align: center;
  position: relative;
  left: 50%;
  padding-bottom: 0.13rem;
  margin-left: 0;
}
@keyframes nav {
  from {
    width: 0px;
  }
  to {
    width: 70%;
    margin-left: -35%;
  }
}
#router-view {
  position: relative;
  width: 100%;
  height: auto;
}
.el-row {
  /* margin-bottom: 20px; */
  margin: 0;
}
.bg-purple-dark {
  background: #99a9bf;
}
.changePage {
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
}
.changePage-enter {
  opacity: 0;
  filter: brightness(0);
  transform: translateX(150px);
}

.changePage-enter-to {
  opacity: 1;
  transform: translateX(0px);
  filter: brightness(1) ;
}

.changePage-enter-active {
  transition: 0.6s ease ;
}
.changePage-leave {
  transform: translateX(0px);
  opacity: 0.5;
}
.changePage-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
.changePage-leave-active {
  transition: 0.4s ease;
}
/* 导航 v-show 动画 */
.enterSongDetail{
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
}
.enterSongDetail-enter {
  transform: translateY(-150px);
}
.enterSongDetail-enter-to {
  transform: translateY(0px);
}

.enterSongDetail-enter-active {
  transition: 0.6s ease ;
}
.enterSongDetail-leave {
  transform: translateY(0px);
}
.enterSongDetail-leave-to {
  transform: translateY(-150px);
}
.enterSongDetail-leave-active {
  transition: 0.4s ease;
}
</style>
