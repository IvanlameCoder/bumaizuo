<template>
  <div>
    <van-list v-if="dataList"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="item in dataList"
        :key="item.filmId"
        @click="handleClick(item.filmId)"
      >
        <img :src="item.poster" alt="" />
        <p>
          {{ item.name }}<span class="filmPlayType">{{ item.item.name }}</span>
        </p>
        <p class="actors">主演： {{ item.actors | actorsFilter }}</p>
        <P>{{ item.nation }}&nbsp;|&nbsp;{{ item.runtime }}分钟</P>
      </van-cell>
    </van-list>
  </div>
</template>
<style>
.van-list .van-cell {
  overflow: hidden;
  box-sizing: border-box;
  margin: 10px 0px;
}
.van-list .van-cell p {
  box-sizing: border-box;
  /* background-color: coral;
    padding-left: 20px; */
}
.van-list .van-cell img {
  float: left;
  width: 100px;
  border-radius: 9px;
}
.van-list .van-cell img + p {
  font-weight: bold;
  margin:15px 0px 0px 15px;
}
.van-lis .van-cell img + p + p {
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
}
.filmPlayType {
  font-size: 13px;
  color: white;
  background-color: gray;
  border-radius: 15%;
  margin-left: 9px;
}
.actors{
  line-break: normal;
}
/* ul li p:nth-of-type(3){
    padding-left: 20%;
    text-align: right;
} */
</style>
<script>
// import axios from "axios";
import http from "@/util/http"; //别名@==>src的绝对路径
import Vue from "vue";
import { List, Cell,Toast } from "vant";
import {mapState} from 'vuex';
Vue.use(List).use(Cell).use(Toast); //全局注册
export default {
  data() {
    return {
      dataList: null,
      loading: false, //是否正在加载中,防止多次触发
      finished: false,
      currentPage: 1, //当前处于第几页面
      totalLength:0//数据总长度
    };
  },
  mounted() {
    //     axios({
    //   url:"https://m.maizuo.com/gateway?cityId=430100&pageNum=1&pageSize=10&type=1&k=1392277",
    //   headers:{
    //       "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"162071319559399397703681","bc":"430100"}',
    //       "X-Host": "mall.film-ticket.film.list"
    //   }
    // }).then(res=>{
    //    console.log(res.data.data.films);
    //   this.dataList=res.data.data.films;
    // });
    //     }
    http({
      url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=9847378`,
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      //    console.log(res.data.data.films);
      this.dataList = res.data.data.films;
    });
  },
  methods: {
    handleClick(id) {
      // console.log(id);
      // location.href="#/center";
      //1.路径 跳转
      // this.$router.push(`/detail/${id}`);//编程式导航
      //2.路由名字 跳转
      this.$router.push({
        name: "ivanDetail",
        params: {
          myid: id,
        },
      });
      //3.querry 方式跳转
      // this.$router.push(`detail?id=${id}`);
    },
    onLoad() {
      // console.log('到底了');
      //1. axjax请求新的页面数据
      //2.合并新数据到老数据
      //3.this.loading=false
      this.currentPage++;
      // console.log(this.currentPage);
      http({
        url:`/gateway?cityId=${this.cityId}&pageNum=${this.currentPage}&pageSize=10&type=1&k=9847378`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        //    console.log(res.data.data.films);
        this.dataList = res.data.data.films;
        this.dataList = [...this.dataList, ...res.data.data.films];
        this.loading=false;
        if (this.dataList.length!==0) {
            this.finished=true;
        }
      });
    //   console.log(this.currentPage);
    //   axios({
    //     url: `https://m.maizuo.com/gateway?cityId=430100&pageNum=${this.currentPage}&pageSize=10&type=1&k=1392277`,
    //     headers: {
    //       "X-Client-Info":
    //         '{"a":"3000","ch":"1002","v":"5.0.4","e":"162071319559399397703681","bc":"430100"}',
    //       "X-Host": "mall.film-ticket.film.list",
    //     },
    //   }).then((res) => {
    //     console.log(res.data.data.films);
    //     this.dataList = res.data.data.films;
    //     this.dataList = [...this.dataList, ...res.data.data.films];
    //     this.loading = false;
    //   });
    },
  },
  computed:{
    ...mapState("CityModule",["cityId"])
  }
};
Vue.filter("actorsFilter", (actors) => {
  // console.log(actors);
  //映射，即原数组映射成一个新的数组；join（）方法将数组的所有元素连接成一个字符串。
  // var arr=[];
  // var actorsList=[];
  // arr.push(actors.map(item=>item.name).join('，'));
  // console.log(arr);
  // arr.forEach(item=>{
  //     // console.log(item.length);
  //     if (item.length>12||item.length>0) {
  //         item=item.substring(0,12)+".....";
  //         // console.log(item);
  //         actorsList.push(item);
  //     }
  // })
  //  console.log(actorsList);
  if (actors === undefined) {
    return "暂无主演";
  }
  return actors.map((item) => item.name).join("，");
});
</script>