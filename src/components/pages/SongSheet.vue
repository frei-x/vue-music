<style scoped>
html,
body {
  background: #eee;
}
.wrapper {
  position: absolute;
  top: 0.7rem !important;
  width: 100%;
  height: auto;
  background: #ddd;
}
.header img {
  width: 100%;
  height: 80vw;
  filter: grayscale(0%) contrast(1) blur(0px) brightness(0.5);
  transition: 0.4s ease;
}
.header img:hover {
  filter: grayscale(0%) contrast(1) blur(0px) brightness(0.2);
}
.header .sheetName {
  width: 3rem;
  height: 20px;
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
  position: relative;
  top: 0rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.05rem 0.2rem 0.1rem 0.1rem;
  font: 16px/22px small-caption;
  text-align: left;
  background: white;
  transition: all 0.5s ease;
}
/* 歌曲列表 */
.songList {
  height: 0.65rem;
  padding: 0.05rem;
  background: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;
  line-height: 0.65rem;
}
.songList:active{
  background: rgba(0, 0, 0, 0.1)
}
.songListImg {
  margin: 0;
  width: 0.65rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.songName {
  font-size: 15px;
  color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  left: 0.95rem;
  top: -0.1rem;
}
.singerName {
  font-size: 14px;
  color: #999;
  position: absolute;
  top: 0;
  left: 0.95rem;
  top: 0.15rem;
}
.order{
  position: absolute;
  top: -0.1rem;
  left: 0.68rem;
  font-size: 15px;
  font-weight: 500;
}

.songList .el-icon-arrow-right {
  position: absolute;
  top: 0;
  right: 4px;
  line-height: 0.65rem;
}
</style>
<template>
  <div class="wrapper">
    <el-row :gutter="0">
      <el-col :span="24" class="header">
        <!-- <img :src="oSheetDetail.coverImgUrl" :alt="oSheetDetail.name"> -->
        <img src="@/assets/sheetImg.png" :alt="oSheetDetail.name">
        <div class="sheetName">{{oSheetDetail.name}}</div>
      </el-col>
    </el-row>

    <MyCollapse class="descriptionP" closeHeight="0.5rem" @updateIsOpen='fun_update' >{{oSheetDetail.description}}</MyCollapse>
    <!-- 歌曲列表 -->
    <div>
      <div
        class="songList"
        v-for="(item,index) in arrSongList"
        :key="item.id"
        @click="funGoSongDetail(item.id,item.al.picUrl)"
      >
        <!-- <img :src="item.al.picUrl" class="songListImg" :alt="item.name"> -->
        <img src="@/assets/songDetail.png" class="songListImg" :alt="item.name">
        <span class="order">{{index+1}}.</span>
        <div class="songName">{{item.name}}</div>
        <div class="singerName">{{item.ar[0].name}}</div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import collapse from "../myCollapse";
export default {
  name:'SongSheet',
  components: {
    MyCollapse: collapse
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
        playCount: 0,
        //标签
        arrTags: [],
        // 封面图片url
        coverImgUrl: "",
        // 描述
        description: "",
        scrollTop:0,
      }
    };
  },
  beforeCreate: function() {},
  created: function() {
    //已创建
  },
  beforeMount: function() {
    //挂载前
    this.$once('update', function(a){
      //console.log(a);
    });
  },
  mounted: function() {
    this.request();
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
  activated: function(e) {
    //组件内部路由生命周期, keep-alive中的组件有效,路由离开该组件和进入时候触发activated/deactivated
    //console.log('进入了');
    //keep-alive 组件激活时调用。
    //该钩子在服务器端渲染期间不被调用。
  },
  deactivated: function() {
    //离开时,恢复上个页面滚动条高度
     //document.documentElement.scrollTop = this.scrollTop;
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
  methods: {
    // 点击的歌曲的id/picurl,通过vuex传递给歌曲详情页
    funGoSongDetail: function(songId,picUrl) {
    //  console.log("歌曲id=", songId);
    //commit后 vuex再通过路由跳转页面传参;
      this.$store.commit('funGoSongDetail',{songId:songId,img:picUrl});
      this.$store.commit('funGolbalSongSrcPic',{songId:songId,img:picUrl});
    },
    //MyCollapse发送@updateIsOpen自定义事件触发此处
    fun_update:function(arrAgs){
      //发送事件
     // console.log(...arrAgs);
      //再发送一个updateIsOpen给beforeMount中监听的函数
      // this.$emit('update', '哈哈哈哈哈,发送,beforeMount时的监听收到');
    },
    request:function(){
        //滚动条重置到顶端(因为使用了路由缓存组件,来源页滚动条高较高,该页面滚动条高度也会与其同值)
    //延迟300ms,因为滚动条高度是共用的,又有过渡动画,来源页滚动条高度会瞬间变为0,需要等待过渡后再设置高度.
    //接收路由参数 id
    this.scrollTop =  (document.body.scrollTop||document.documentElement.scrollTop);
    document.body.scrollTop= document.documentElement.scrollTop = 0;
    var id = this.$route.query.id;
    this.axios
      .get(this.Golbal.api.sheetDetail + id, {})
      .then(res => {
        //console.log(res);
        if (res.data.code == 200) {
          this.arrSongList = res.data.playlist.tracks;
          var regDes = /\n/g;
          // res.data.playlist.description = res.data.playlist.description.replace(regDes,'<br/>')
          this.oSheetDetail = {
            name: res.data.playlist.name,
            id: res.data.playlist.id,
            playCount: res.data.playlist.playCount,
            arrTags: res.data.playlist.tags,
            coverImgUrl: res.data.playlist.coverImgUrl,
            description: res.data.playlist.description
          };
        } else {
          console.error(this.Golbal.api.sheetDetail + id + "请求状态码非200");
        }
      })
      .catch(err => {
        console.error(err);
      });
    }
  }
};
</script>
