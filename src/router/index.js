import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from '../views/film.vue';
// import Center from '../views/center.vue';
import Cinema from '../views/cinema.vue';
import city from '../views/city.vue';
// import login from '../views/login.vue';
import detail from '../views/film/detail.vue';
import nowPlaying from '../views/film/nowPlaying.vue';
import commingSoon from '../views/film/commingSoon.vue';
import Search from '@/views/Search.vue';
Vue.use(VueRouter);//注册模块,已经创建全局组件 router-view
const routes=[
    {
        path:'/film',
        component:Film,
        //嵌套路由
        children:[
            {
                path:'/film/nowPlaying',
                component:nowPlaying
            },
            {
                path:'/film/commingSoon',
                component:commingSoon
            },
            {
                path:"",
                redirect:"/film/nowPlaying"
            }
        ]
    },
    {
        path:'/center',
        component:()=>import(/*webpackChunkName:"ivanGroup"*/'../views/center.vue')
        // component:Center
    },
    {
        path:'/cinema',
        component:Cinema
    },
    {
        //动态路由
        path:'/detail/:myid',
        component:detail,
        name:"ivanDetail"
    }
    // {
    //     path:"/film/detail",
    //     component:detail
    // }
    ,
    {
        path:'/login',
        component:()=>import(/*webpackChunkName:"ivanGroup"*/'../views/login.vue')//路由懒加载
        // component:login
    },
    {
        path:"/city",
        component:city
    },
    {
        path:"/cinema/Search",
        component:Search
    }
    ,
    {
        path:'*',//通配符
        redirect:"/film"
    }
]
const router=new VueRouter({
    //模式。hash 带有#,默认为hash模式;  history不带任何符号例如/film/detail/ abstract什么都不显示只显示域名
    mode:"hash",
    routes:routes
})
//全局路由守卫
router.beforeEach((to,from,next)=>{
    let authority=['/center','/order','/money','/card'];
    if (authority.includes(to.fullPath)) {
        // console.log('验证token');
        if (!localStorage.getItem('token')) {
            next('/login');
        }else{
            next();
        }
    }else{
        //需要验证
        next();
    }
});
export default router ;