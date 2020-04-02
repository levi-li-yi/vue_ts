import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '123'
  },
  mutations: {
    setToken: (state, value) => {
      state.token = value
    }
  },
  actions: {
    setToken: ({dispatch, commit}, value) => {
      console.log('action:', value)
      commit('setToken', value)
    }
  },
  modules: {
  },
});
