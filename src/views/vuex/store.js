import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//应用初始状态 存储数据
const state = {
    isLogin: JSON.parse(sessionStorage.getItem('user')) || {}
}

// 修改state的数据状态 相当于计算属性computed(同步加载)
const mutations= {
    user_l:(state,user)=>{ //接收发送过来的数据
        console.log(user);
        // console.log(state);

        Object.assign(state,user)
    }
}

// 解决mutations的同步问题（可以异步调用）
const actions = { 
   user_l:({commit},user)=>commit('user_l')
} 

// 对state 里面的数据二次处理（对数据进行过滤类似filter的作用
const getters = {
    user : state => state.user
}


// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})