<template>
  <div class="about">
    展商
  </div>
</template>
<script>
import { apiAddress } from '@/static/js/api';// 导入我们的api接口
export default{
  name: 'zhan',
  data(){
    return {

    }
  },
  created(){
    this.onLoad();
  },
  methods:{
    //获取数据
    onLoad(){
      //调用api接口，并且提供两个参数
      // apiAddress({
      //   type:0,
      //   sort:1
      // }).then(res =>{
      //   console.log(res)
      // })
        console.log(apiAddress)
      
    }
    
  }
}
</script>
<style lang="scss" scoped>

</style>

