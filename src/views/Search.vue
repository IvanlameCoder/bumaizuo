<template>
  <div>
      <van-search
       placeholder="请输入搜索城市名"
       v-model="searchValue"
       shape="round"
       background="#e47831f5"
       @cancel="handleCancel"
       show-action
       />
       <van-List>
           <van-cell v-for="(item,index) in searchCity" :key="index">
               <div>{{item.name}}</div>
               <div class="address">{{item.address}}</div>
           </van-cell>
       </van-List>
  </div>
</template>
<style>
.address {
  font-size: 12px;
  color: rgb(180, 179, 179);
}
</style>
<script>
import Vue from 'vue';
import {Search,List,Cell} from 'vant';
import { mapActions, mapState } from 'vuex';
Vue.use(Search).use(List).use(Cell);
export default {
  data(){
      return {
          searchValue:""
      }
  },
  mounted() {
    // console.log(this.$store.state.cinemaList);
    if (this.cinemaList.length === 0) {
      //vuex异步流程
      this.getCinemaList(this.cityId);
    }else{
        // console.log('缓存');
    }
  },
  methods:{
    ...mapActions("CinemaListModule",["getCinemaList"]),
    handleCancel(){
        this.$router.replace("/cinema");
    }
  },
  computed:{
       ...mapState("CinemaListModule",["cinemaList"]),
       ...mapState("CityModule",["cityName","cityId"]),
        searchCity(){
        let list=[];
        if (this.searchValue!=0) {
              //在搜索值searchValue不为0的前提下关键字里含有地址或影院名称相关的关键字是返回这个结果
              list=this.cinemaList.filter(item=>(item.name.toUpperCase().includes(this.searchValue.toUpperCase())||(item.address.toUpperCase().includes(this.searchValue.toUpperCase()))));
             return list;
        } else {
            //在搜索值searchValue为0的情况下 返回数组为空的结果
            list =[];
            return  list;
        }
      }
  }
};
</script>