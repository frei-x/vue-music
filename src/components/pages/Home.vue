<template>
  <div class="wrapper">
    <el-row :gutter="5">
      <el-col :span="8" v-for="(item,index) in arrSheetList" 
        :key="index" :data-id="item.id" @click.native="funGoSheetDetail(item.id)">
        <div class="sheetItem">
          <!-- <img :src="item.picUrl" :alt="item.name"> -->
          <img src="@/assets/sheetImg.png" :alt="item.name">
        <div class="sheetName">{{item.name}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      arrSheetList: [],
      // 记录滚动条高度
      scrollX:0,
    };
  },
  watch: {},
  beforeCreate: function() {
    //console.log(this.$route.query);
    //创建前
  },
   
  created: function() {
    var g = this.Golbal;
    this.axios.get(g.api.recommendSheet + "", {})
      .then(res => {
        if (res.data.code == 200) {
          this.arrSheetList = res.data.result;
        } else {
          console.error("arrSheetList数据状态非200");
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
  beforeMount: function() {
    //挂载前
  },
  activated() {
    //路由进入该页
    document.body.scrollTop=document.documentElement.scrollTop = this.scrollX;
  },
  deactivated() {
    //document.documentElement.scrollTop在谷歌为0,但是document.body.scrollTop为0时,documentElement出现20
    this.scrollX = (document.body.scrollTop+0.1||document.documentElement.scrollTop);
    //console.log(document.body.scrollTop,document.documentElement.scrollTop)
    //  = document.documentElement.scrollTop = 0;
    //路由离开该页-
  },
  mounted: function() {},
  computed: {},
  methods: {
    funGoSheetDetail(id){
      this.$store.commit('funGoSheetDetail',id);
    }
  }
};
</script>
<style scoped>

.wrapper {
  width: 100%;
  height: auto;
  text-align: center;
  position: absolute;
  top: 0.7rem;
}
.el-col>div {
  height: 1.2rem;
  /*border: 1px solid red;*/
  margin: 1px 1px 40px 1px;
}
.sheetItem img {
  margin: 0;
  width: 100%;
  height: 100%;
}
.sheetName {
  height: 40px;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  overflow: hidden;
}
</style>