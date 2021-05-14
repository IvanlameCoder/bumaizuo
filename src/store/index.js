// import Vue from 'vue';
import Vuex from 'vuex';
import CityModule from './module/City.Module';
import CinemaListModule from './module/CinemaList.Module';
import TabbarModule from './module/Tabbar.Module';
import createPersitedState from 'vuex-persistedstate';
// store '全局'的对象
export default new Vuex.Store({
    plugins:[createPersitedState()],
    state:{
            
    },
    //集中式修改状态
    mutations:{
       
       
    },
    //异步
    actions:{
       
    },
    //放入各个模块
    modules:{
        CityModule,
        CinemaListModule,
        TabbarModule
    }
})