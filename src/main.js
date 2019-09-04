import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './views/vuex/store.js'
import 'mint-ui/lib/style.css'

import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';

import videoPlayer from 'vue-video-player'
Vue.use(videoPlayer)
import 'video.js/dist/video-js.css'
// Vue.use(Swiper)


//全局Axios(引入axios)
import Axios from 'axios';
//挂载原型
Vue.prototype.$axios=Axios;
//默认配置
Axios.defaults.baseURL='https://sz.goodtea.cc/index/'
import QS from 'qs'

// 引入点击图片放大的插件并注册
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
let options={
  fullscreenEl:false, //关闭全屏按钮
}
Vue.use(preview,options)

import MintUI from 'mint-ui'
Vue.use(MintUI)

// 引入Muicss
import "./static/mui/my.css"
import "./static/mui/reset.css"
import { isObject } from 'util';

Vue.config.productionTip = false

// import store from './views/vuex/store.js'

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if(to.meta.role){
//     if(localStorage.getItem('Token')){
//     console.log(store.state.isLogin)
//       next()
//     }else{
//     console.log(store.state.user)
//       next({
//         path:'/login',
//         query:{redirect:to.fullPath}//把要跳转的地址作为参数传到下一步(主要是为了确定是从哪个页面跳转过来的)
//       })
//     }
//   }else{
//    next()
//  }
//  })


//  Vux判断是否登录
router.beforeEach((to, from, next) => {
  if(to.meta.role){
    if(!isEmptyObject(store.state.user)== 'object' ){
      next()
    }else{
      next({
        // path:'/login',
        query:{redirect:to.Path}//把要跳转的地址作为参数传到下一步(主要是为了确定是从哪个页面跳转过来的)
      })
    }
  }else{
   next()
 }
 })
 //判断object是否为空
 function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
  }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

