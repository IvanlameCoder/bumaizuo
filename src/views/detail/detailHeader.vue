<template>
    <div>
        <i class="iconfont icon-shouye" @click="backToHome"></i>
       {{title}}
       
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin:0;
}
div{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: whitesmoke;
   text-align: center;
}
.iconfont{
    text-align: left;
    position: absolute;
    left: 20px;
    font-size: 25px;
}
</style>
<script>
export default {
    methods:{
        backToHome(){
            window.history.go(-1);
        }
    },
    props:{
        title:{
            type:String,
            default:"电影"
        }
    }
}
</script>