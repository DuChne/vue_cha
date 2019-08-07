import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Go from './views/go.vue'
import Cat from './views/cat.vue'
import Zhan from './views/children/zhan.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
      // children:[
      //   {name:'zhan',path:'/home/zhan',component:Zhan}
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
    {name:'zhan',path:'/home/zhan',component:Zhan}    
  ]
})

//导航路由
// 使用router.beforeEach
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   if(to.path == '/about'){
//     next();
//   }else {
//     let token=localStorage.getItem
//   }
// })

