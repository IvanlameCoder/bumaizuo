import Vue from 'vue';
import Vuex from 'vuex';
import http from "@/util/http"; //别名@==>src的绝对路径
Vue.use(Vuex);
const module={
    //命名空间
    namespaced:true,
    state:{
        cinemaList:[]
    },
    mutations:{
        SetCinemaList(state,cinemaList){
            state.cinemaList=cinemaList;
        },
        clearCinemaList(state){
            state.cinemaList=[];
        }
    },
    actions:{
        getCinemaList(store,cityId){
            // console.log(cityId);
        return  http({
                url: 
                `/gateway?cityId=${cityId}&ticketFlag=1&k=9748749
                `,
                headers: {
                  "X-Host": "mall.film-ticket.cinema.list",
                },
              }).then((res) => {
                // console.log(res.data);
                store.commit("SetCinemaList",res.data.data.cinemas);
              });
        }
    }
}
export default module;