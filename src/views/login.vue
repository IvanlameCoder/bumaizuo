<template>
    <div>
        login
        <van-button type='primary'>登录</van-button>
    </div>
</template>
<script>
import Vue from 'vue';
import {Button} from 'vant';
Vue.use(Button);//全局注册组件
export default {
    //组件内路由拦截
    beforeRouterEnter(to,from,next){
        if (!localStorage.getItem('token')) {
            next('/login');
        }else{
            next();
        }
    }
}
</script>