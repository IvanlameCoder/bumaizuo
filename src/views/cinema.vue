
<template>
<div>
   <van-nav-bar
  title="影院"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="handleLeftChooseCity"
  @click-right="handleRightSearchCity"
  >
    <template #left @click="chooseCity">
        {{cityName}}
        <van-icon name="arrow-down" size="18"></van-icon>
    </template>
     <template #right @click="searchCity">
        <van-icon name="search" size="18"></van-icon>
    </template>
   </van-nav-bar>
    <div class="cinema" :style="{height:height}">
        <ul>
            <li v-for="item in cinemaList" :key="item.cinemaId">
               <div> {{item.name}}</div>
               <div class="address"> {{item.address}}</div>
            </li>
        </ul>
    </div>
</div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.cinema {
  overflow: hidden;
  height: 700px;
  /* 定义成相对定位better-scroll属性才会在准确位置出现 */
  position: relative;
}
.address {
  font-size: 12px;
  color: rgb(180, 179, 179);
}
</style>
<script>
// import http from "@/util/http"; //别名@==>src的绝对路径
import bettScroll from "better-scroll";
import { Icon, NavBar } from "vant";
import Vue from "vue";
// import Search from '@/views/Search';
import { mapActions, mapMutations, mapState } from 'vuex';
// import axios from 'axios';
Vue.use(NavBar).use(Icon);
export default {
  data() {
    return {
      cityList: null,
      height: 0,
    };
  },
  methods: {
     ...mapActions("CinemaListModule",["getCinemaList"]),
     ...mapMutations("CinemaListModule",["clearCinemaList"]),
    handleLeftChooseCity() {
      // console.log('ok');
      //清空$store.state.cinemaList
      // this.$store.commit("clearCinemaList");
      this.clearCinemaList();
      this.$router.push("/city");
    },handleRightSearchCity(){
      this.$router.push("/cinema/Search");
    },
    chooseCity() {
      this.$emit("handleLeftChooseCity",this.$store.state.cityId);
    },
    searchCity(){
      this.$emit("handleRightSearchCity",this.$store.state.cityId);
      // console.log(this.$store.state.cityId);
    }
  },
  mounted() {
    //动态获取容器高度
    this.height = document.documentElement.clientHeight - 96 + "px";
    if (this.cinemaList.length===0) {
      //vuex异步流程
      this.getCinemaList(this.cityId).
      then(()=>{
                //立刻渲染滚动条
                this.$nextTick(() => {
                  new bettScroll(".cinema", {
                    scrollbar: {
                      fade: true,
                    },
                  });
                });
      });
    } else {
       // console.log("缓存");
       //立刻渲染滚动条
                this.$nextTick(() => {
                  new bettScroll(".cinema", {
                    scrollbar: {
                      fade: true,
                    },
                  });
                });
    }
    //    console.log(this.height);
    // http({
    //   url: 
    //   `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=9748749
    //   `,
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list",
    //   },
    // }).then((res) => {
    //   //console.log(res.data.data.cinemas);
    //   //状态立即更改，但是dom异步渲染
    //   this.cityList = res.data.data.cinemas;
    //   this.$nextTick(() => {
    //     new bettScroll(".cinema", {
    //       scrollbar: {
    //         fade: true,
    //       },
    //     });
    //   });
    // });
    // axios({
    //     url:"https://m.maizuo.com/gateway?cityId=430100&pageNum=1&pageSize=10&type=1&k=2737476",
    //     headers:{
    //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16206279246894096819945473","bc":"430100"}',
    //         'X-Host':' mall.film-ticket.cinema.list'
    //     }
    // }).then(res=>{
    //     console.log(res.data);
    // })
  },
  computed:{
    ...mapState("CinemaListModule",["cinemaList"]),
    ...mapState("CityModule",["cityId","cityName"])
  },
  components:{
    // "Search":Search
  }
};
</script>