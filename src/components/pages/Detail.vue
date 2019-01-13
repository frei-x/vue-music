<template>
  <div class="wrapper">
    <div class="background" :style="'background:url('+backgroundImg+')'">
     

     
      </div>
    <!-- <Myaudio :src="songUrl" @loaded="fun_loaded"></Myaudio> -->
    <div class="lyricOutBox">
      <div class="lyricBody">
        <div class="lyricItem" v-for="(item) in arrSongLyricInfo" :key="item[0]">{{item[1]}}</div>
      </div>
    </div>
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
      // 时间和歌词二维数组
      arrSongLyricInfo:[],
      backgroundImg: "rgba(0,0,0,0.5)",
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
        res.data.lrc ? (this.songLyric = res.data.lrc.lyric) : null;
        res.data.klyric ? (this.songKlyric = res.data.klyric.lyric) : null;
        if(this.songLyric){
          // 以换行符分割歌词为数组,['[00:02.79]呃 这面到这边全部都唱完了','...']
          let arrLyricLineFeed  = this.songLyric.split('\n');
          // 歌词时间数组
          let arrTime = [];
          let arrLyric = [];
          let arrSongLyricInfo = [];
          console.log('歌词行数:',arrLyricLineFeed);
          for(let i=0;i<arrLyricLineFeed.length;i++){
            let time = arrLyricLineFeed[i].match(/\[(\S*)\]/g);
            let lyric = arrLyricLineFeed[i].split('] ')[1];
            //歌词可能是空的
            if(time&&Array.isArray(time)){
              // 拆分冒号,冒号前是分钟,冒号后是秒
              time = time[0].slice(1,-1).split(':');
              //
              time = (parseFloat(time[0]*60)+parseFloat(time[1]))*1000;
            }else{
              time = '';
            }
            if(!lyric){
              lyric = '';
            }
            //arrTime.push(time);
           // arrLyric.push(lyric);
            arrSongLyricInfo.push([time,lyric]);
          }
          this.arrSongLyricInfo = arrSongLyricInfo;
          console.log(arrSongLyricInfo);
          //console.log(arrTime);
          //console.log(arrLyric);
        }
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
  filter: brightness(0.5) blur(20px);
  -ms-filter: brightness(0.5) blur(20px);
  background-size: 100% 100% !important;
  opacity: 1;
}
.lyricOutBox{
  z-index:99;
  position:absolute;
  top: 40%;
  margin-top: -25%;
  width: 100vw;
  height: 50%;
  overflow: hidden;
  white-space:nowrap; 
  text-align: center;
  color:gold;
}
.lyricBody{
  width: 100vw;
  transition: 0.4s;
  position: absolute;
  left: 0;
}
.lyricItem{
  font-size: 17px;
  text-align: center;
  margin: 10px;
}
</style>