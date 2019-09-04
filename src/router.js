import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Go from './views/go.vue'
import Cat from './views/cat.vue'
import Zhan from './views/children/zhan.vue'
import Nei from './views/children/nei.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // children:[
      //   {name:'zhan',path:'/home/zhan',component:Zhan}
      // ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta:{
        role:true
      }
    },
    {
      path: '/go',
      name: 'go',
      component: Go      
    },
    {
      path: '/cat',
      name: 'cat',
      component: Cat
    },
    {name:'zhan',path:'/home/zhan',component:Zhan},
    {name:'nei',path:'/home/zhan/nei',component:Nei},
    {name:'login',path:'/login',component:Login}
  ]
})


