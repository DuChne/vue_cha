/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';//引入axios
import Qs from 'qs';//引入qs模块，用来序列化post类型的数据


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

 /** 
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
*/
export function get (url,params){
    console.log(axios.get)
    console.log(params)
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params:{}
        }).then(res =>{
            // console.log(res.data)
            resolve(res.data);
        }).catch(() => console.log('承诺抓住犯错'))
        
        .catch(err => {
            reject(err.data)
        })
    })
}

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