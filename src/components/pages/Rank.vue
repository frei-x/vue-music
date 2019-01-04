<style scoped>
.wrapper{
    position: absolute;
    top: 0.7rem;
    width: 100%;
    height: auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.sheetList{ 
    width: 100%;
    height: 1rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    background: white;
}
.sheetList img{
    width: 1rem;
    height:100%;
    margin: 0;
    padding: 0;
}
.songName{
    position: relative !important;
    left: 1rem;
    top: -1.05rem;
    margin: 0.12rem;
}
</style>

<template>
    <div class="wrapper">
        <div class="sheetList" v-for="item in arrSheetList" :key="item.id" @click="funGoSheetDetail(item.id)">
            <img :src="item.coverImgUrl" :alt="item.name">
            <div v-for="(songTop3,ind) in (item.tracks.length?item.tracks:[{}])" :key="item.id+ind+1" class="songTop3">
                <div class="songName">{{songTop3.first?ind+1+'.&nbsp&nbsp&nbsp'+songTop3.first:'暂无数据'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        
    },
    props:{
        
    },
    data(){
        return {
            arrSheetList:[]
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
       this.axios.get(this.Golbal.api.topSheet)
       .then((res)=>{
           if(res.data.code==200){
               this.arrSheetList = res.data.list;
           }else{
               console.log(this.Golbal.api.topSheet+'状态码非200');
           }
       })
       .catch((err)=>{
           console.log(err);
       })
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
    computed:{
        //计算属性
    },
    watch:{
        //数据观察
    },
    methods:{
        funGoSheetDetail(id){
            this.$store.commit('funGoSheetDetail',id);
        }
    },
}
</script>