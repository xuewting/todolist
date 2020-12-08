import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    id: 0,
    todoList: []
  },
  getters: {
    doneTodos: (state) => {
      return state.todoList.filter((todo) => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    todosCount: (state) => {
      return state.todoList.length;
    }
  },
  mutations: {
    addItem(state, item) {
      state.todoList.push({ ...item, id: state.id });
      state.id++;
    },
    deleteItem(state, id) {
      let todoList = state.todoList;
      state.todoList.splice(
        todoList.findIndex((item) => item.id === id),
        1
      );
    },
    changeItemState(state, id) {
      let index = state.todoList.findIndex((item) => item.id === id);
      console.log(state.todoList[index].done);
      state.todoList[index].done = !!state.todoList[index].done;
    }
  }
});

export default store;
