<template>
  <div>
    <van-index-bar :sticky="true"  :index-list="computedCityList" @select="handleSelect">
      <template>
        <div v-for="data in cityList" :key="data.type">
          <van-index-anchor :index="data.type"> </van-index-anchor>
          <van-cell
            v-for="(item, index) in data.list"
            :title="item.name"
            :key="index"
            @click="cityChooseClick(item.cityId,item.name)"
          ></van-cell>
        </div>
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import { IndexBar, Cell, IndexAnchor,Toast } from "vant";
import Vue from "vue";
import http from "@/util/http";
import { mapMutations } from 'vuex';
Vue.use(IndexBar).use(Cell).use(IndexAnchor).use(Toast);
export default {
  data() {
    return {
      cityList: [
        // {
        //   type: "A",
        //   list: ["A1", "A2", "A3"],
        // },
        // {
        //   type: "B",
        //   list: ["B1", "B2", "B3"],
        // },
        // {
        //   type: "C",
        //   list: ["C1", "C2", "C3"],
        // },
      ],
    };
  },
  mounted() {
    //动态获取容器高度
    http({
      url: "/gateway?k=3779773",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      //   console.log(res.data.data.cities);
      //重新排列数组 将排列好的数组赋值到cityList
     this.cityList=this.handleCityData(res.data.data.cities);
    });
  },
  methods: {
    ...mapMutations("CityModule",["changeCityName","changeCityId"]),
    handleCityData(cities) {
      //输入原始数据，输出的是 目标数据
      //   console.log(cities);
      let letterArr = [];
      let newCityList=[];
      for (let code = 65; code < 91; code++) {
        //   console.log(String.fromCharCode(code));
        letterArr.push(String.fromCharCode(code));
      }
      //   console.log(letterArr);
      letterArr.forEach((letter) => {
        const list = cities.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() == letter);
        // console.log(list);
        if (list.length>0) {
            newCityList.push({
                type:letter,
                list:list
            })
        }
        // console.log(newCityList);
      });
       return newCityList;
    },
    cityChooseClick(cityId,cityName){
        // console.log(cityId); 记录cityId cityName
        // this.$store.commit("changeCityName",cityName);
        // this.$store.commit("changeCityId",cityId);
        this.changeCityName(cityName);
        this.changeCityId(cityId);
        this.$router.back('/cinema');
    },
    handleSelect(index){
        // console.log(index);
        Toast({
            message:index
        })
    }
  },
  computed:{
      computedCityList(){
          //映射
          return this.cityList.map(item=>item.type);
      }
  }
};
</script>