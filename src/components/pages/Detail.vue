<template>
  <div class="wrapper">
      <audio :src="songUrl" controls></audio>
      <pre>
          {{songKlyric}}
      </pre>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      songUrl: "",
      songLyric: "",
      songKlyric:""
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
    var songId = this.$route.query.id;
    this.axios.get(this.Golbal.api.getSongUrl + songId).then(res => {
      if (res.data.code == 200) {
        this.songUrl = res.data.data[0].url;
      } else {
        console.error("歌曲url获取失败" + res.data.code);
      }
    });
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
  },
  computed: {
    //计算属性
  },
  watch: {
    //数据观察
  },
  methods: {}
};
</script>
<style scoped>
.wrapper {
  width: 100%;
}
</style>