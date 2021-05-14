<template>
    <div>
        <ul>
          <router-link to="/film/nowPlaying" active-class="highLight" tag="li">正在热映</router-link>
          <router-link to="/film/commingSoon" active-class="highLight" tag="li">即将上映</router-link>
        </ul>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 22;
}
ul li{
    flex: 1;
    list-style: none;
}
.highLight{
    color: coral;
    border-bottom: 1px solid coral;
}
</style>