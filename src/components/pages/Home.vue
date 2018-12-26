<template>
    <div class="wrapper">
        <el-row  :gutter="5">
            <el-col :span='8'><div>666</div></el-col>
            <el-col :span='8'><div>666</div></el-col>
            <el-col :span='8'><div>666</div> </el-col>
            <el-col :span='8'><div>666</div> </el-col>
            <el-col :span='8'><div>666</div> </el-col>
            <el-col :span='8'><div>666</div> </el-col>
            <el-col :span='8'><div>666</div> </el-col>
            <el-col :span='8'><div>666</div> </el-col>
            <el-col :span='8'><div>666</div> </el-col>
        </el-row>
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

        }
    },
    watch:{

    },
    beforeCreate:function () {
        console.log(this.$route.query)
        //创建前
    },
    created:function(){
          
    },
    mounted:function(){
        var g = this.Golbal; 
        this.axios.get(g.api.recommendSheet+"?data=99999",{timeout:10000})
        .then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });
    },
    beforeMount:function(){
        //挂载前
    },
    computed:{},
    methods:{},
  
}
</script>
<style scoped>
  .el-row {
    
  }
.wrapper{
    width: 100%;
    height: auto;
    text-align: center;
    position: absolute;
    top: 0.5rem;
}
.el-col div{
    height: 4rem;
    border: 1px solid red;
    padding: 5px;
    margin:1px 1px 20px 1px;
}

</style>