<template>
    <div class="wrapper">排行</div>
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
       console.log(this.$route.params);
    },
    beforeMount:function(){
        //挂载前
    },
    mounted:function(){
        
    }
}
</script>
<style scoped>
.wrapper{
    width: 100%;
    height: auto;
    text-align: center;
    position: absolute;
     padding-left: calc(100vw - 100%);
}
</style>