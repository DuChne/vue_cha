<template>
  <div class="about">
    关于我们
    <bar></bar>
  </div>
</template>
<script>
import stort from 'vuex';
import { loging } from '@/static/js/api';
import bar from '@/components/bar'

export default {
  name:'about',
  components: {
    bar
  },
  data(){
    return {

    }
  },
  created(){
    this.onload()
  },
  methods:{
    onload(){
      let par={'phone':18328080725};
      let _this=this;
      loging(par).then(res=>{
        console.log(res.data)
        _this.userToken = 'Bearer ' + res.data;
        console.log(_this.userToken)
        // 将用户token保存到vuex中
          // _this.changeLogin({ Authorization: _this.userToken });
          // _this.changeLogin((Authorization:_this.userToken))
          // _this.changeLogin({ Authorization: _this.userToken })
          // _this.$router.push('/home');
          // _this.$router.push('/home')
          // alert('登陆成功');
      })
    }
  }
}
</script>