<template>
  <div class="oAudio">
    <audio :src="src" ref="audio"  @canplay="loaded($event)"></audio>
    <el-slider v-model="sliderValue"></el-slider>
  </div>
</template>
<script>
// import funAudio from '@/audioPlayer.js'
export default {
  components: {},
  props: {
    //   歌曲链接
    src: {
      type: String,
      default: ""
    },
    // 默认是否播放
    play: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sliderValue: 0
    };
  },
  beforeCreate: function() {
    //创建前
  },
  created: function() {},
  beforeMount: function() {
    //挂载前
  },
  mounted: function() {
    var audio = this.$refs.audio;
    console.log(this.$refs);
    // audio.addEventListener( "load",function() {
    //     console.log(audio.duration);
    //   },false);
  },
  beforeUpdate: function() {
    //更新前
  },
  updated: function() {
    //已更新
   
  },
  beforeDestroy: function() {
    //销毁前
  },
  destroyed: function() {
    //已销毁
  },
  activated: function() {
    //路由进入该页
  },
  deactivated: function() {
    //console.log('路由离开该页')
    //keep-alive 组件停用时调用。
    //该钩子在服务器端渲染期间不被调用。
  },
  computed: {
    //计算属性
   
  },
  watch: {
    //数据观察
     src:function(){
      console.log(this.src)
    }
  },
  methods: {
    loaded(e) {
      this.$emit("loaded", {
        duration: e.target.duration,
        target: e.target,
        paused: e.target.paused,
        volume: e.target.volume
      });
    }
  }
};
</script>
<style>
.el-slider {
  position: absolute !important;
  left: 0.6rem;
  width: 70% !important;
  transition: 0.3s;
}
.el-slider__bar {
  height: 3px !important;
  background-color: rgba(255, 255, 255, 0.6) !important;
  box-shadow: 1px  1px 5px rgba(0,245,255,1) inset;
}
.el-slider__runway {
  height: 3px !important;
  background: rgba(0, 0, 0, 0.3) !important;
}
.el-slider__button{
 width: 10px !important;
 height: 10px !important;
 border:0px solid red !important;
 margin-bottom: 2px;
 background-color:rgba(0,245,255,1) !important;
}
</style>
<style scope>
.oAudio {
  width:100%;
  z-index: 2;
  position: fixed;
  bottom: 60px;
}
</style>