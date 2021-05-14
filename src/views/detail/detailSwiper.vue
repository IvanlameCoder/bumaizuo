<template>
    <div>
        <div class="swiper-container" :class="swiperClass">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide">222</div> -->
                <slot name="actorsList"></slot>
                <slot name="photos"></slot>
            </div>
        </div>
    </div>
</template>
<style>
.swiper-wrapper img{
    width: 100%;
}
</style>
<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
export default {
    mounted(){
        // console.log(this.swiperClass);
        // console.log(this.sildeCount);
        new Swiper('.'+this.swiperClass+'',{
        loop:false,
        slidesPerView:this.sildeCount,
        spaceBetween:25,
        freeMode:true
    })
    },
    props:{
        //定义每页轮播几个的属性 接收子组件传过来的值
        sildeCount:{
            type:Number,
            default:1
        },
        swiperClass:{
            type:String,
            default:"swiper-container"
        }
    }
}
</script>