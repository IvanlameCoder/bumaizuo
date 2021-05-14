const module={
     //命名空间
    namespaced:true,
    state:{
        cityId:"430100",
        cityName:"长沙",
    },
    mutations:{
        changeCityName(state,name){
            state.cityName=name;
        },
        changeCityId(state,name){
            state.cityId=name;
        },
    },
    actions:{

    }
}
export default module;