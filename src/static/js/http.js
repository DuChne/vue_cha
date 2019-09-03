/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';//引入axios
import Qs from 'qs';//引入qs模块，用来序列化post类型的数据
// vant的toast提示框组件，大家可根据自己的ui组件更改。
// import {Toast} from 'vant';


// 设置请求拦截
// 有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据
// 先导入vuex,因为我们要使用到里面的状态对象
// vuex的路径根据自己的路径去写
// import store from '@/store/index';
// import router from '@router';

// 环境的切换
if(process.env.NODE_ENV == 'development'){
    axios.defaults.baseURL = 'https://sz.goodtea.cc/index/';
}else if(process.env.NODE_ENV == 'debug'){
    axios.defaults.baseURL = 'https://sz.goodtea.cc/index/';
}else if(process.env.NODE_ENV == 'production'){
    axios.defaults.baseURL = 'https://sz.goodtea.cc/index/';    
}
 
// 通过axios.defaults.timeout设置默认的请求超时时间,例如超过了10s，就会告知用户当前请求超时，请刷新等
axios.defaults.timeout = 10000;
// 给post请求设置一个默认的请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 请求拦截
// axios.interceptors.request.use(
//     config =>{
// //         // 每次发送请求之前判断vuex中是否存在token
// //         // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
// //         // 及时本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//         const token = store.state.token;
//         token && (config.headers.Authorization = token);
//         return config;
//     },
//     config =>{
//         return Promise.error(error);
// })

//响应拦截
// axios.interceptors.response.use(
//     response => {
//         //如果返回的状态为200，正常
//         //否则的话跑去错误
//         if(response.status == 200){
//             return Promise.resolve(response);
//         }else{
//             return Promise.reject(response);
//         }
//     },
//     //服务器状态码不是2开头的情况  
//     // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
//     // 下面列举几个常见的操作，其他需求可自行扩展
//     error => {
//         if(error.response.status){
//             switch (error.response.status) {
//                 // 401:未登录
//                 // 未登录则跳转登录也，并血袋当前页面的路径
//                 // 在登录成功后返回当前页面，这一步需要再登录也操作
//                 case 401:
//                     router.replace({
//                         path:'/login',
//                         query: {
//                             redirect: router.currentRoute.fullPath
//                         }
//                     });
//                     break;

//                 // 403 token过期
//                 // 登录过期对用户进行提示
//                 // 清除本地token和清空vuex中的token对象
//                 // 跳转登录页面
//                 case 403:
//                     console.log('登录过期，请重新登录')
//                     // Toast({
//                     //     message:'登录过期，请重新登录',
//                     //     duration:1000,
//                     //     forbidClick:true
//                     // });
//                     //清除token
//                     localStorage.removeItem('token');
//                     store.commit('loginSuccess',null);
//                     // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//                     setTimeout(() => {
//                         router.replace({
//                             path:'/login',
//                             query:{
//                                 redirect:router.currentRoute.fullPath
//                             }
//                         })
//                     },1000);
//                     break;

//                 //404请求不存在
//                 case 404:
//                     console.log('网络请求不存在')
//                     // Toast({
//                     //     message:'网络请求不存在',
//                     //     duration:1500,
//                     //     forbidClick:true
//                     // });
//                     break;
                
//                 //其他错误，直接抛出错误提示
//                 default:
//                     console.log('其他错误，直接抛出错误提示')
//                     // Toast({
//                     //     message: error.response.data.message,
//                     //     duration:1500,
//                     //     forbidClick:true
//                     // });
//             }
//             return Promise.reject(error.response);
//         }
//     })


/** 
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
*/

export function get (url,params){
    // console.log(axios.get)
    // console.log(Qs.stringify(params))
    return new Promise((resolve,reject)=>{
        axios.get(url,{params}).then(res =>{
            // console.log(res.data)
            resolve(res.data);
        })
        
        .catch(err => {
            reject(err.data)
        })
    })
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */

 export function post(url,params){
    //  console.log(url)
    //  console.log(params)
     return new Promise((resolve,reject)=>{
        //  console.log(Qs.stringify(params))
         axios.post(url,Qs.stringify(params))
         .then(res => {
             resolve(res.data);
         })
         .catch(err =>{
             reject(err.data)
         })
     })
 }