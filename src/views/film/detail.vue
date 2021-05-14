<template>
  <!-- <v-touch @swiperight="OnSwipeRight"> -->
    <div v-if="filmInfo" >
        <!-- <button @click="backPage">回去</button> -->
        <!-- 定义v-top指令 -->
        <detail-header v-top  :title="filmInfo.name"></detail-header>
        <div :style="{backgroundImage:'url('+filmInfo.poster+')'}"
            style="height:200px;background-size:cover;background-position:center"
        ></div>
        <h3>{{filmInfo.name}} <span class="filmPlayType">{{filmInfo.filmType.name}}</span></h3>
        <div>{{filmInfo.premiereAt|dateFromat}}上映</div>
        <div>{{filmInfo.nation}}|{{filmInfo.runtime}}分钟</div>
        <div class="previousContent" :class="isShow?'synopsis_unFold':'synopsis_fold'">{{filmInfo.synopsis}}</div>
        <div class="viewMore"><i class="iconfont" :class="isShow?'icon-jianshao':'icon-zengjia'" @click="isShow=!isShow"></i></div>
          <h3>演职人员</h3>
          <detail-swiper :sildeCount="3" swiperClass="swiper-actors">
              <template #actorsList>
                  <div class="swiper-slide" v-for="(data,index) in filmInfo.actors" :key="index">
                      <img :src="data.avatarAddress" @click="handlePreview_actors(index)"/>
                      <h6 class="director">{{data.name}}</h6>
                      <h6 class="role">{{data.role}}</h6>
                  </div>
              </template>
          </detail-swiper>
          <h3>剧照</h3>
          <detail-swiper :sildeCount="2" swiperClass="swiper-photos"> 
              <template #photos>
                  <div class="swiper-slide" v-for="(src,index) in filmInfo.photos" :key="index"  :style="{backgroundImage:'url('+src+')'}"
            style="height:100px;width:100%;background-size:cover;background-position:center" @click="handlePreview_photos(index)">
                  </div>
              </template>
          </detail-swiper>  
    </div>
    <!-- </v-touch> -->
</template>
<style scoped>
.filmPlayType{
    font-size: 13px;
    color:white;
    background-color: gray;
    border-radius: 15%;
    margin-left:9px;
}
.synopsis_fold{
    height: 60px;
    overflow: hidden;
}
.synopsis_unFold{
    height: auto;
    transition:all 1s linear;
}
.previousContent{
    box-sizing: border-box;
    padding: 9px;
}
.viewMore{
    text-align: center;
}
.director{
    font-family: 'Times New Roman', Times, serif;
}
.role{
    font-family: 'Times New Roman', Times, serif;
    color: rgb(172, 172, 172);
}
</style>
<script>
// import axios from 'axios';
import http from '@/util/http';
import Vue from 'vue';
import moment from 'moment';
import detailSwiper from '../detail/detailSwiper';
import detailHeader from '../detail/detailHeader';
import {ImagePreview,Toast} from 'vant';
import { mapMutations } from 'vuex';
import VueTouch from 'vue-touch';
Vue.use(ImagePreview).use(Toast);
Vue.use(VueTouch,{name:'v-touch'});
Vue.filter("dateFromat",(date)=>{
    //日期处理函数 --moment
    return moment(date*1000).format('YYYY-MM-DD');
});
export default {
    data(){
        return {
            filmInfo:null,
            isShow:false
        }
    },
    methods:{
        
    ...mapMutations("TabbarModule",["show","hide"]),
        // backPage(){
        //     window.history.back();
        // }
        //预览剧组照
        handlePreview_photos(index){
            //图片预览
           ImagePreview({
               images:this.filmInfo.photos,
               startPosition:index,
               closeable:true,
               closeIconPosition:'top-left'
           });
        },
        //预览演职人员
        handlePreview_actors(index){
             var list=[];
             this.filmInfo.actors.forEach(element => {
                //  console.log(element.avatarAddress);
                list.push(element.avatarAddress);
             });
            //  console.log(list);
            ImagePreview({
                images:list,
                startPosition:index
            });
        },
        //v-touch 事件
        // OnSwipeRight(){
        //     // console.log('ok');
        //     this.$router.back();
        // }
    },
    //this.$route 当前匹配的路由对象信息
    mounted(){
    // console.log("利用获取的id，qjax请求后端接口",this.$route.params.myid); 
    //query方式接收id
    // console.log(this.$route.query.id);
    // axios({
    //     url:
    //     `
    //     https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=3562120
    //     `,
    //     headers:{
    //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"162071319559399397703681","bc":"430100"}',
    //         'X-Host': 'mall.film-ticket.film.info'
    //     }
    // }).
    // then(res=>{
    //     // console.log(res.data.data.film);
    //     this.filmInfo=res.data.data.film;
    // }),

    //不显示tabbar组件,更改store中状态为isTabBarShow
    // this.$store.state.commit("show");
    this.hide(),
    http({
        url:
        `/gateway?filmId=${this.$route.params.myid}&k=3035547
        `,
        headers:{
             'X-Host': 'mall.film-ticket.film.info'
        }
    }).
    then(res=>{
         this.filmInfo=res.data.data.film;
    })
    } ,
    beforeDestroy(){
         //显示tabbar组件,更改store中状态为isTabBarShow为true
        // this.$store.state.commit("hide");
        this.show()
    },
    components:{
        "detailSwiper":detailSwiper,
        "detailHeader":detailHeader
    }
}
//定义指令
Vue.directive("top",{
    inserted(el){
        // console.log(el);
        el.style.display='none';
        window.onscroll=()=>{
        if((document.body.scrollTop||document.documentElement.scrollTop)>50){
            el.style.display='block';
        }else{
            el.style.display='none';
        }
        }
    },
    unbind(){
        window.onscroll=null;
    }
})
</script>