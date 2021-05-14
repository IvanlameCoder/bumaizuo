<template>
   <nav>
       <ul>
           <!-- <li><a href="#/film">电影</a></li>
           <li><a href="#/center">中心</a></li>
           <li><a href="#/cinema">影院</a></li> -->
            <router-link to="/film" class="c" tag="li" active-class="highLight">
                <i class="iconfont icon-dianying"></i>
                <span>电影</span>
            </router-link>
            <router-link to="/center" class="c" tag="li" active-class="highLight">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </router-link>
            <router-link to="/cinema" class="c" tag="li" active-class="highLight">
                <i class="iconfont icon-yingyuan"></i>
                <span>影院</span>
            </router-link>
       </ul>
   </nav>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    background-color: whitesmoke;
}
ul{
    display: flex;
    /* justify-content: space-around; */
}
ul li{
    list-style: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* margin:0 20px; */
}
ul li span{
    font-size: 12px;
}
ul li i{
    font-size: 22px;
}
.highLight{
    color: coral;
}
/* @keyframes ass {
    0%{
        background-color: hotpink;
        opacity: 20%;
    } 
    100%{
         background-color: hotpink;
        opacity: 100%;
    }   
} */
/* .highLight{
    box-shadow: 1px 1px 2px gainsboro;
    animation:ass 1s ease alternate; 
    animation-fill-mode: forwards;
} */
    /* .c::before{
            content: '';
			position: absolute;
			width: 100px;
			left: 50%;
			bottom: 0;
			height: 5px;
			background-color: coral;   
    }
    .c:hover:before{
         width: 80%;
         left: 10%;
         transition: all  0.5s;
    }
    /* .highLight{
        background-color: hotpink;
        transition: all ease-in-out .5s;
        
    } */ 
</style>