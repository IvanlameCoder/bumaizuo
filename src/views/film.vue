<template>
    <div>
        <film-swiper></film-swiper>
        <film-header class="film-header"></film-header>
        <router-view></router-view>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
}
.film-header{
    position: sticky;
    top: 0;
    background-color: white;
}
/* .film-swiper{
    width:300px; 
    background-color:lightblue;
} */
</style>
<script>
import FilmHeader from './film/FilmHeader';
import FilmSwiper from './film/FilmSwiper';
// import Vue from 'vue';
// Vue.component("FilmHeader",FilmHeader);
export default {
   components:{
      "FilmHeader":FilmHeader,
      "FilmSwiper":FilmSwiper
   }
}
</script>