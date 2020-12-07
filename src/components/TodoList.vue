<template>
  <div class="todo-box">
    <h1>TodoList</h1>

    <div class="todo-input">
      <a-row>
        <a-col :span="6">
          <p>今天做些什么呢：</p>
        </a-col>
        <a-col :span="14">
          <a-input placeholder="输入新的待做任务" v-model="current" @keydown.enter="addNewItem"/>
        </a-col>
        <a-col :span="4">
          <a-button type="primary" @click="addNewItem">添加</a-button>
        </a-col>
      </a-row>
    </div>

    <div class="item-line" v-for="item in todolist" :key="item.id">
      <todo-item
      :detail="item"
      @finishedCount="finishedCount"
      @deleteItem="deleteItem" />
    </div>

    <todo-list-report :style="reportStyle" />
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import TodoListReport from './TodoListReport';
import { mapMutations } from 'vuex'

export default {
  name: 'todo-list',
  data() {
    return {
      id: 0,
      currentid: 0,
      current: '',
      todolist: [],
      finishedcount: 0,
      reportStyle: {
        marginTop: '20px',
      },
    };
  },
  components: {
    TodoItem,
    TodoListReport,
  },
  methods: {
    ...mapMutations(['addCount', 'subCount', 'addFinishedCount', 'subFinishedCount']),
    addNewItem() {
      this.addCount();
      this.todolist.push({
        id: this.id ++,
        value: this.current,
        finished: false});
      this.current = ''
    },
    findItem(p) {
      return p.id === this.currentid;
    },
    deleteItem(id) {
      this.subCount();
      this.currentid = id;
      let index = this.todolist.findIndex(this.findItem);
      this.todolist[index].finished ? this.subFinishedCount() : '';
      this.todolist.splice(index, 1);
    },
    finishedCount(finished, id) {
      this.currentid = id;
      let index = this.todolist.findIndex(this.findItem);
      this.todolist[index].finished = finished;
      finished ? this.addFinishedCount() : this.subFinishedCount();
    },
  },
};
</script>

<style lang="less" scoped>
.todo-box {
  width: 80%;
  margin: 10px auto;
  .todo-input {
    p {
      height: 32px;
      line-height: 32px;
      font-size: 18px;
      text-align: right;
    }
  }
}
</style>
