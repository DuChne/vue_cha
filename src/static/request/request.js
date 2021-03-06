import axios from 'axios'
// import {  Message } from 'element-ui' // element-ui
// import store from '@/store' // vuex
// import { getToken, getUserName } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://sz.goodtea.cc/index/', // http地址
  timeout: 100000 // 请求超时时间， 联调时间需要加长一些
})

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    //   // config.headers['Content-Type'] =
    //   // config.headers['userName'] = getUserName()
    //   //   'application/x-www-form-urlencoded;charset=UTF-8'
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    // Promise.reject(error)
  }
)
// 怎么调的？
// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     //  */
    // const res = response.data
    // if (response.status === 200 || response.status === 201) {
    //   return response.data
    // } else {
    //   console.log('请求状态码非200或201')
    // }
    // if (res.code === 3015) {
    //   console.log(3015)
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }
    return Promise.resolve(response.data)
    return response.data
    // if (response.status !== 200) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     MessageBox.confirm(
    //       '你已被登出，可以取消继续留在该页面，或者重新登录',
    //       '确定登出', {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }
    //     ).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload() // 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    //   return Promise.reject('error')
    // } else {
    //   return response.data
    // }
  },
  error => {
    // console.log('err' + error) // for debug
    // if (error.message.indexOf('500') == -1) {
    //   Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }
    return Promise.reject(error)
  }
)

export default service
