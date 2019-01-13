<template>
    <div ref="collapse" :data-h='height' class="body" :style="'height:'+closeHeight" @click="isOpen=!isOpen;">
       <pre id="pre"><slot></slot></pre><i :class="['el-icon-caret-left',isOpen?'el-icon-caret-leftOpen':'']"></i>
    </div>
</template>

<script>
export default {
  name: "myCollapse",
  components: {},
  props: {
    closeHeight: {
      type: String,
      default: "0.3rem"
    }
  },
  data() {
    return {
      isOpen: false,
      height:'',
    }
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
    //路由进入该页
   // var that = this;
   //console.log(window.getComputedStyle(that.$refs.collapse,null).height);
    this.isOpen = false;
  },
  deactivated: function() {
    //console.log('路由离开该页')
    //keep-alive 组件停用时调用。
    //该钩子在服务器端渲染期间不被调用。
    this.isOpen = false;
  },
  computed: {
    //计算属性
    
  },
  watch: {
    //数据观察
    isOpen:function(newVleu,oldValue){
      var el = this.$refs.collapse;
        if(oldValue){
          el.style.height = this.closeHeight;
        }else{
          el.style.height = 'auto';
          var openheight =  getComputedStyle(el).height;
          el.style.height = this.closeHeight;
          setTimeout(()=>{
            // 如果auto的高度比初始高度还小,就不使用auto计算出的高度,closeHeight单位是rem,转换为px
            if(parseInt(openheight)<parseFloat(this.closeHeight)*this.Golbal.fontSize){
              el.style.height = this.closeHeight;
            }else{
              el.style.height = openheight;
            }
          },50);
        }
         this.$emit('updateIsOpen', [this.isOpen,this.closeHeight]);
    },
    //watch props中的closeHeight.如果closeHeight传入了值,将传入的新值覆盖默认值
    //不watch该值操作下,本组件内使用的closeHeight会一直是默认值,
    closeHeight:function(newVleu,oldValue){
      this.closeHeight = newVleu;
    }
  },
  methods: {
    
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
}
.body {
  width: 100%;
  overflow: hidden;
  transition: 0.6s ease;
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
  background: white;
  /* box-shadow: 1px 1px 10px rgba(19, 6, 6, 0.596); */
  line-height: 22px;
  box-sizing: border-box;
}
.el-icon-caret-left{
  position:absolute;top: 0;
  line-height: 0.5rem;
  right: 4px;
  transition: 0.5s ease ;
  color: grey;
}
.el-icon-caret-leftOpen{
  transform: rotate(-90deg) scale(1.2);
  color: black;
}
#pre{
  white-space: pre-wrap!important;
word-wrap: break-word!important;
}
</style>