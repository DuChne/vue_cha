<template>
  <div class="home">
    <div id="swipea">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in arrImg" :key="index">
          <img :src="http+item.pic" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    {{http}}
    <!-- <div class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide">silide 1</div>
        <div class="swiper-slide">silide 2</div>
        <div class="swiper-slide">silide 3</div>
        <div class="swiper-slide">silide 4</div>
        <div class="swiper-slide">silide 5</div>
        <div class="swiper-slide">silide 6</div>
      </div>
    </div> -->

    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'zhan'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">领取门票</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">展商列表</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">为何观展</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">展会概况</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">展区分布</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">茶博会</div></router-link></li>
		        </ul> 
		</div>
    <!-- <router-view></router-view> -->

  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { constants } from 'crypto';
import Swiper from 'swiper' 
// import Swiper from 'vue-swiper'; 


export default {
  name: 'home',
  
  components: {
    HelloWorld
  },
  data(){
    return {
      http:'https://sz.goodtea.cc/',
      arrImg:[]
    }
  },
  created(){
    this.$axios.get('Api/getWap')
    .then(res=>{
      console.log(res.data);
      this.arrImg=res.data.data.Banner;
      console.log(this.arrImg)
    })
    
    // console.log(this.$http)
  },
  mounted(){
   new Swiper('.swiper-container', {
   autoplay:true,
   loop:true,
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
 },
  }
</script>
<style lang="scss" scoped>
  .home{
     touch-action: none;
     padding-bottom: 0.5rem;
  }
  #swipea{
    width: 100%;
    height: 8rem;
  }

  //九宫格样式
  .mui-table-view.mui-grid-view.mui-grid-9{
    background: #ffffff;
    margin-top: 0;
    border: none;
  }
  .mui-table-view.mui-grid-view.mui-grid-9 li{
    border: none;
  }
  .mui-table-view mui-grid-view mui-grid-9{
    border: none;
  }

  .mui-icon-home:before,
  .mui-icon-email:before,
  .mui-icon-chatbubble:before,
  .mui-icon-location:before,
  .mui-icon-search:before,
  .mui-icon-phone:before{
    content: '' !important;
  }

  .mui-icon-home{
    background: url('../assets/images/lingqu.png') round;
    background-size: 100% 100%;
  }
  .mui-icon-email{
    background: url('../assets/images/whygaunz.png') round;
    background-size: 100% 100%;
  }
  .mui-icon-chatbubble{
    background: url('../assets/images/whycanz.png') round;
    background-size: 100% 100%;
  }
  .mui-icon-location{
    background: url('../assets/images/gauzng.png') round;
    background-size: 100% 100%;
  }
  .mui-icon-search{
    background: url('../assets/images/qufenb.png') round;
    background-size: 100% 100%;
  }
  .mui-icon-phone{
    background: url('../assets/images/gauzng.png') round;
    background-size: 100% 100%;
  }
  // 九宫格图标高度
  .mui-icon{
    width: 0.46rem;
    height: 0.36rem;
    bottom: 1px solid red;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 0.24rem;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding: 0;
  }
</style>