import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    finishedCount: 0,
  },
  mutations: {
    addCount(state) {
      state.count += 1;
    },
    addFinishedCount(state) {
      state.finishedCount += 1;
    },
    subCount(state) {
      state.count -= 1;
    },
    subFinishedCount(state) {
      state.finishedCount -= 1;
    }
  }
})

export default store;
