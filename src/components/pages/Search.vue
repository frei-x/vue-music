<template>
    <div class="wrapper"></div>
</template>

<script>
export default {
    components:{
        
    },
    props:{
        
    },
    data(){
        return {
        
        }
    },
    beforeCreate:function () {
        //创建前
    },
    created:function(){
        //已创建
    },
    beforeMount:function(){
        //挂载前
    },
    mounted:function(){
        //已挂载
    },
    beforeUpdate:function(){
        //更新前
    },
    updated:function(){
        //已更新
    },
    beforeDestroy:function(){
        //销毁前
    },
    destroyed:function(){
        //已销毁
    },
    activated:function(){
        //路由进入该页
    },
    deactivated:function(){
        //console.log('路由离开该页')
        //keep-alive 组件停用时调用。
        //该钩子在服务器端渲染期间不被调用。
    },
    computed:{
        //计算属性
    },
    watch:{
        //数据观察
    },
    methods:{
    
    },
}
</script>
<style scoped>
.wrapper{
    width: 100%;
    height: auto;
    text-align: center;
    position: absolute;
    top: 0.7rem;
}
</style>