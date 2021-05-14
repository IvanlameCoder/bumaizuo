<template>
    <div>
        <div class="siwper-container ivan">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in imgList" :key="item.id">
                    <!-- <img :src="item.src"> -->
                    <div :style="{backgroundImage:'url('+item.src+')'}"
                    style="height:200px;background-size:cover;background-postion:center;"
                    ></div>
                </div> 
            </div>
             <div class="swiper-pagination dots"></div>
        </div>
    </div>
</template>
<style scoped>
.dots{
    position: absolute;
    top:33%
}
</style>
<script>
import Swiper from 'swiper/bundle';//引入swiper.js
import 'swiper/swiper-bundle.min.css';//引入swiper.css
export default {
  data(){
      return{
          imgList:[
              {id:1,src:"https://pic.maizuo.com/usr/movie/637447e2e85b1efebbc53bc05098d363.jpg?x-oss-process=image/quality,Q_70"},
              {id:2,src:"https://pic.maizuo.com/usr/movie/e36d2d9c7db09e956849e89aebbc5259.jpg?x-oss-process=image/quality,Q_70"},
              {id:3,src:"https://pic.maizuo.com/usr/movie/ee9130a205df09b6ba0fffef1eb95e28.jpg?x-oss-process=image/quality,Q_70"}
          ]
      }
  },
  mounted(){
  new Swiper(".siwper-container",{
           loop:true,
           pagination:{
               el:".dots",
               dynamicBullets:true
           }
      });
  }
}
</script>