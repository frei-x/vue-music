<template>
  <div id="app">
    <!-- :gutter="20" 间隔 -->
    <el-row class="header_nav" :gutter="0">
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
    <!-- modth = 'out-in' 动画时间顺序 -->
    <!-- <router-view>外层加div 设置为相对定位,内部视图为绝对定位,
    既可以撑开html,路由切换动画也不会因为元素脱离文档流而瞬间上下抖动-->
    <!--keep-alive 缓存路由视图,被缓存的视图组件不会被销毁/重载,不会触发生命周期,但可以触发组建内部路由钩子  -->
    <!-- <div id="router-view"> -->
    <transition name="changePage" modth="out-in">
      <!-- exclude = 不缓存的路由 -->
      <keep-alive exclude="SongSheet">
        <router-view style="position:absolute;top:0.43rem"></router-view>
      </keep-alive>
    </transition>
    <!-- </div> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    
  },
  methods: {
    fun_app(e) {
      // console.log(e.target.innerHTML);
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
  margin-top: 20px;
  font-size: 16px;
}
.header_nav {
  border-bottom: 1px solid #ddd;
  padding: 5px 6px 0px 6px;
  font-size: 16px;
  color: black;
}
.router-link-active {
  color: #d33a31 !important;
  text-align: center;
  box-sizing: content-box;
}
.router-link-active::after {
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
</style>
