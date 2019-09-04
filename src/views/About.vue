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
import Axios from 'axios';

export default {
  // // 组件内的路由导航守卫
  // beforeRouteEnter(to, from, next) {
  //   // 路由的名称，对应路由配置中的 name
  //   const fromName = from.name

  //   // 确认导航
  //   next(vm => {
  //     // 通过 vm 参数访问组件实例，已登录时，评估路由名称
  //     if (vm.$s.state.auth) {
  //       switch (fromName) {
  //         // 如果从注册页面跳转过来
  //         case 'Register':
  //           // 显示注册成功
  //           vm.showMsg('注册成功')
  //           break
  //       }
  //     }
  //   })
  // },
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