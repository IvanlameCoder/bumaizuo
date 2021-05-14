const module={
     //命名空间
    namespaced: true,
    state:{
        isTabBarShow:true,
    },
    mutations:{
        show(state){
            state.isTabBarShow=true;
        },
        hide(state){
            state.isTabBarShow=false;
        },
    },
    actions:{

    }
}
export default module;