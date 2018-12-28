<template>
    <div ref="collapse" :data-h='height' class="body" :style="'height:'+closeHeight" @click="isOpen=!isOpen;">
        <slot></slot>
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
            el.style.height = openheight;
          },50);
         
        }
    }
  },
  methods: {}
};
</script>
<style scoped>
.wrapper {
  width: 100%;
}
.body {
  width: 100%;
  overflow: hidden;
  transition: 0.4s ease;
  background: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  line-height: 22px;
  box-sizing: border-box;
}
</style>