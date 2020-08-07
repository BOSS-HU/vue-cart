import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1000,
    isLogin: false //登录状态
  },
  mutations: { //同步直接提交 mutatuios ，异步先dispatch 到actions，在commit到mutations
    add(state) {
      state.count += 1
    },
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    },
  },
  getters: { //对state的数据进行加工处理
    money(state) {
      return state.count + '元'
    }
  },
  actions: {  //异步操作使用 
    addAsync(store) {
      const { commit } = store
      setTimeout(() => {
        commit('add')
      }, 1000)
    },
    //  submitLogin({ state, commit }, payload)  两个参数，1.store 2.payload传输的数据
    submitLogin({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('login')
          resolve(true)
        }, 2000)

      })
    }
  },
  modules: {
  }
})
