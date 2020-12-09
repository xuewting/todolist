<template>
  <div class="todo-box">
    <h1>TodoList</h1>

    <!-- S 任务输入框 -->
    <div class="todo-input">
      <a-row>
        <a-col :span="6">
          <p>今天做些什么呢：</p>
        </a-col>
        <a-col :span="14">
          <a-input
            v-model="current"
            placeholder="输入新的待做任务"
            @keydown.enter="
              addItem({ value: current, done: false });
              clearCurrent();
            "
          />
        </a-col>
        <a-col :span="4">
          <a-button
            type="primary"
            @click="
              addItem({ value: current, done: false });
              clearCurrent();
            "
            >添加</a-button
          >
        </a-col>
      </a-row>
    </div>
    <!-- E 任务输入框 -->

    <!-- S 任务列表 -->
    <todo-list-item
      v-for="item in $store.state.todoList"
      :key="item.id"
      :detail="item"
    ></todo-list-item>
    <!-- E 任务列表 -->

    <!-- S 任务报告 -->
    <todo-list-report :style="reportStyle" />
    <!-- E 任务报告 -->
  </div>
</template>

<script>
import TodoListItem from './TodoListItem';
import TodoListReport from './TodoListReport';
import { mapMutations } from 'vuex';

export default {
  name: 'todo-list',
  components: {
    TodoListItem,
    TodoListReport
  },
  data() {
    return {
      current: '',
      reportStyle: {
        marginTop: '20px'
      },
      test: [{ id: 1, value: '1', done: false }]
    };
  },
  methods: {
    ...mapMutations(['addItem']),
    clearCurrent() {
      this.current = '';
    }
  }
};
</script>

<style lang="less" scoped>
.todo-box {
  width: 80%;
  margin: 10px auto;

  .todo-input {
    p {
      height: 32px;
      font-size: 18px;
      line-height: 32px;
      text-align: right;
    }
  }
}
</style>
