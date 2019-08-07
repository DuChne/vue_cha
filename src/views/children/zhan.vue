<template>
  <div class="about">
    展商
  </div>
</template>
<script>
import { apiAddress,apiAp } from '@/static/js/api';// 导入我们的api接口
import { constants } from 'crypto';
// import { apiAddress } from '@/static/request/api';// 导入我们的api接口
// import * as request from '@/static/request/custom.js'

export default{
  name: 'zhan',
  data(){
    return {

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
      let parmns={}
      apiAddress(parmns).then(res =>{
        console.log(res)
      })
      let par={'phone':18328080725};
      apiAp(par).then(res=>{
        console.log(res)
      })
    }
    
  }
}
</script>
<style lang="scss" scoped>

</style>

