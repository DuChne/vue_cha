<template>
  <div class="about">
    <mt-header fixed class="music-header-3 playing-header xin" title="我的">
            <span slot="left" @click="$router.go(-1)">
            <!-- <img src="" width="26"> -->
        返回
            </span>
            <span slot="right" style="font-size: 30px;font-weight: bold;display: inline-block;margin-top: -10px;">...</span>
        </mt-header>
    <div v-for="(item,index) in zhan" :key="index" @click="goPay(item.id)">
      <!-- <router-link :to="{ name: 'nei', params: { id: 123 } }"> -->
        <img :src="http+(item.logo?item.logo:'')" alt="">
      <!-- </router-link> -->
      {{http}}{{item.logo}}
    </div>
    
  </div>
</template>
<script>
import { apiAddress,apiAp } from '@/static/js/api';// 导入我们的api接口
import { constants } from 'crypto';
// import { apiAddress } from '@/static/request/api';// 导入我们的api接口
// import * as request from '@/static/request/custom.js'
import {zhanData,apiA} from '@/static/js/newp'

export default{
  name: 'zhan',
  data(){
    return {
      zhan:[],
      http:'https://sz.goodtea.cc'
    }
  },
  created(){
    this.onLoad();
  },
  mounted(){
    // request.jiekou().then((res)=>{
    //   console.log(res)
    // })
    // console.log(request.jiekou())
  },
  methods:{
    //获取数据
    onLoad(){
      let parmns={
        'page': 1,
        'page1': 0, 
        'page2': 0,
        'page3': 0,
        'text': '',
        'sort': '',
        'area': '',
        'tj': '',
        'type': '',
        'listRows':30
      }
      // apiAddress(parmns).then(res =>{
      //   console.log(res)
      // })
      // let par={'phone':18328080725};
      // apiAp(par).then(res=>{
      //   console.log(res)
      // })
      //获取展商
      zhanData(parmns).then(res =>{
        // console.log(parmns)
        let _this=this;
        _this.zhan=res.data.data;
        console.log(_this.zhan)
      })
      // apiA({}).then(res => {
      //   console.log(res)
      // })
      let par={'phone':18328080725};
      apiAp(par).then(res=>{
        console.log(res)
      })
    },
    goPay(id){
      this.$router.push({
          // path:'/home/zhan/nei',
          name:'nei',
          params:{
            id:id
          }
      })
    }
    
  }
}
</script>
<style lang="scss" scoped>
  .about{
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    padding-bottom: 160px;
    padding-top: 50px;
    border: 1px solid red;
  }
  .xin{
    width: 100%;
  }
</style>

