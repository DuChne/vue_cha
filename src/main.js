import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';

// Vue.use(Swiper)


//全局Axios(引入axios)
import Axios from 'axios';
//挂载原型
Vue.prototype.$axios=Axios;
//默认配置
Axios.defaults.baseURL='https://sz.goodtea.cc/index/'
import QS from 'qs'

Vue.use(MintUI,Swiper)

// 引入Muicss
import "./static/mui/my.css"
import "./static/mui/reset.css"

Vue.config.productionTip = false


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path == '/about') {
   let token = localStorage.getItem('Authorization');
    console.log(token)
    if (token === 'null' || token === '') {
      console.log('跳转')
      // next('/home');
    } else {
      next();
    }
  } else{
    next()
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

