<link rel="stylesheet" href="/iconfont/iconfont.css"/>
// 放置dom元素
<template>
 <div id="app">
   <tabbar v-show="isTabBarShow"></tabbar>
   <!-- 路由容器 -->
   <section>
     <router-view></router-view>
   </section>
 </div>
</template>
<style>
/* 解决移动端300ms响应--安卓 */
*{
    touch-action: manipulation;
}
</style>
// 放置js脚本 ES6模块导出
<script>
import Vue from 'vue';
import tabbar from './components/tabbar';
import {mapState} from 'vuex';//导入映射状态
// import axios from 'axios';
Vue.component("tabbar",tabbar);
export default {
  data(){
    return{
    
    }
  },
  mounted(){
    // console.log(mapState('TabbarModule',["isTabBarShow"]));
    // //魅力惠
    // axios.get("http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2042204290000008645&key=&sort=&timestamp=1620624546315&summary=5229582efa4ffb86c3df809c30bba71d&platform_code=H5").
    // then(res=>{
    //   console.log(res.data);
    // });
    // //猫眼
    // axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=2013FF10B15511EBACF8AF2291A2EEBD5383D69FD78B4EC883B86B6F02552199&optimus_risk_level=71&optimus_code=10").
    // then(res=>{
    //   console.log(res.data);
    // });
    //卖座
    // axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6246397").
    // then(res=>{
    //   console.log(res.data);
    // });
    // axios({
    //   url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7582450",
    //   headers:{
    //       "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16206279246894096819945473","bc":"110100"}',
    //       "X-Host": "mall.film-ticket.film.list"
    //   }
    // }).then(res=>{
    //   console.log(res.data);
    // });
  },
  methods:{
  },
  computed:{
    ...mapState('TabbarModule',["isTabBarShow"])
  }
}
</script>
<style scoped>
li{
    background-color: pink;
  }
section{
  margin-bottom:50px;
}
</style>