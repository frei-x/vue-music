<template>
  <div class="wrapper">
    <el-row :gutter="0">
      <el-col :span="24" class="header">
        <img :src="oSheetDetail.coverImgUrl" :alt="oSheetDetail.name">
        <div class="sheetName">{{oSheetDetail.name}}</div>
      </el-col>
    </el-row>

      <myCollapse  class="descriptionP" closeHeight='0.35rem'>
            {{oSheetDetail.description}}
      </myCollapse>
    <div></div>
  </div>
</template>

<script>
import collapse from "../myCollapse";
export default {
  components: {
    myCollapse: collapse
  },
  props: {},
  data() {
    return {
      // 歌曲详情列表
      arrSongList: [],
      oSheetDetail: {
        name: "",
        id: "",
        //播放量
        playCount: Number,
        //标签
        arrTags: [],
        // 封面图片url
        coverImgUrl: "",
        // 描述
        description: ""
      }
    };
  },
  beforeCreate: function() {},
  created: function() {
    //已创建
  },
  beforeMount: function() {
    //挂载前
  },
  mounted: function() {},
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
  activated: function(e) {
    //组件内部路由生命周期, keep-alive中的组件有效,路由离开该组件和进入时候触发activated/deactivated
    //console.log('进入了');
    //keep-alive 组件激活时调用。
    //该钩子在服务器端渲染期间不被调用。
    //滚动条重置到顶端(因为使用了路由缓存组件,来源页滚动条高较高,该页面滚动条高度也会与其同值)
    //延迟300ms,因为滚动条高度是共用的,又有过渡动画,来源页滚动条高度会瞬间变为0,需要等待过渡后再设置高度.
    setTimeout(()=>{
        document.documentElement.scrollTop = 0;
    },300);
    
    //接收路由参数 id
    var id = this.$route.query.id;
    this.axios
      .get(this.Golbal.api.sheetDetail + id, {})
      .then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.arrSongList = res.data.playlist.tracks;
          this.oSheetDetail = {
            name: res.data.playlist.name,
            id: res.data.playlist.id,
            playCount: res.data.playlist.playCount,
            arrTags: res.data.playlist.tags,
            coverImgUrl: res.data.playlist.coverImgUrl,
            description: res.data.playlist.description
          };
        } else {
          console.log(this.Golbal.api.sheetDetail + id + "请求状态码非200");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  deactivated: function() {
    //keep-alive 组件停用时调用。
    //该钩子在服务器端渲染期间不被调用。
    //console.log('离开了')
  },
  computed: {
    //计算属性
  },
  watch: {
    // '$route'(to,form){
    //     if(to.name=='SongSheet'){
    //         alert(this.$route.query.id)
    //     }
    // }
  },
  methods: {}
};
</script>
<style scoped>
html,
body {
  background: #eee;
}
.wrapper {
  position: absolute;
  top:auto !important;
  width: 100%;
  height: auto;
  background: #eee;
}
.header img {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2.4rem;
  filter: grayscale(0%) contrast(1) blur(0px) brightness(0.5);
  transition: 0.4s ease;
}
.header img:hover{
     filter: grayscale(0%) contrast(1) blur(0px) brightness(0.2);
}
.header .sheetName {
  width: 3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: white;
  position: absolute;
  left: 50%;
  margin-left: -1.5rem;
  top: 0.15rem;
  text-align: center;
  font: 18px/18px "Microsoft Yahei";
}
.descriptionP {
  position: absolute;
  top: 2.4rem;
  width: 100%;
  padding: 0.05rem 0.1rem 0.1rem 0.05rem;
  font: 16px/25px small-caption;
  text-align: left;
  background: white;
  transition:all 0.5s ease;
}
.descriptionClose{
  overflow: hidden;
  height: 100%;
  width: 80%;
}
.descriptionOpen {
  width: 80%;
  padding: 0.5rem;
}
</style>