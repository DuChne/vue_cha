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


Vue.use(MintUI,Swiper)

// 引入Muicss
import "./static/mui/my.css"
import "./static/mui/reset.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
