// import devRequest from './request';
// import prodRequest from '@/utils/request';

const isDev = process.env.NODE_ENV === 'development' // 获取当前环境所用的网关地址

let request

// if is development
/* if (isDev) {
  // development
  // 开发环境用自己模块的request
  request = require('@/modules/pms/api/request.js').default
} else {
  // production
  // 生产环境用自己模块的request
  request = require('@/utils/request.js').default
}
*/
// 用这个
request = require('./request.js').default
export default request
