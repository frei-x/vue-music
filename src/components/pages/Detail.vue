<template>
  <div class="wrapper">
    <div class="background" :style="'background:url('+backgroundImg+')'"></div>
    <!-- <Myaudio :src="songUrl" @loaded="fun_loaded"></Myaudio> -->
    <pre>
        {{songKlyric}}
    </pre>
  </div>
</template>

<script>
import audio from "@/components/musicPlayer";
export default {
  components: {
    Myaudio: audio
  },
  props: {},
  data() {
    return {
      songUrl: "",
      songLyric: "",
      songKlyric: "",
      backgroundImg: "rgba(0,0,0,0.5)"
    };
  },
  beforeCreate: function() {
    //创建前
  },
  created: function() {
    //已创建
  },
  beforeMount: function() {
    //挂载前
  },
  mounted: function() {
    //已挂载
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
    // 隐藏导航
    this.$store.commit("funisShowNav");

    var songId = this.$route.query.id;
    this.backgroundImg = this.$route.query.img;
    //console.log(this.$route.query.img);
    // 部分音频会403,hack技巧: 直接用id
    this.songUrl = `https://music.163.com/song/media/outer/url?id=${songId}.mp3`;
    // this.axios.get(this.Golbal.api.getSongUrl + songId).then(res => {
    //   if (res.data.code == 200) {
    //     this.songUrl = res.data.data[0].url;
    //   } else {
    //     console.error("歌曲url获取失败" + res.data.code);
    //   }
    // });
    this.axios.get(this.Golbal.api.getSongLyric + songId).then(res => {
      if (res.data.code == 200) {
        this.songLyric = res.data.lrc.lyric;
        this.songKlyric = res.data.klyric.lyric;
      } else {
        console.error("歌词获取失败" + res.data.code);
      }
    });
  },
  deactivated: function() {
    //console.log('路由离开该页')
    //keep-alive 组件停用时调用。
    //该钩子在服务器端渲染期间不被调用。
    this.$store.commit("funisShowNav");
  },
  computed: {
    //计算属性
  },
  watch: {
    //数据观察
  },
  methods: {
    fun_loaded(param) {
      console.log(param);
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
}
.background {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  filter:brightness(0.5) blur(20px);
  background-size: 100% 100% !important;
}
</style>